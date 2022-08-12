import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import LineLayerAnimation from "./lib/LineLayerAnimation";
import FeatureEffect from "@arcgis/core/layers/support/FeatureEffect";
import FeatureFilter from "@arcgis/core/layers/support/FeatureFilter";
import {SimpleMarkerSymbol, TextSymbol} from "@arcgis/core/symbols";
import LabelClass from "@arcgis/core/layers/support/LabelClass";
import Compass from "@arcgis/core/widgets/Compass";
import UniqueValueRenderer from "@arcgis/core/renderers/UniqueValueRenderer";
import WebScene from "@arcgis/core/WebScene";
import SceneView from "@arcgis/core/views/SceneView";

const map = new WebScene({
  portalItem: {
    //id: "02bae9c8de294eabaa91972b14394ecc",
    id: "72966e78b41946d8a2d549691d972900",
  },
});

const view = new SceneView({
  container: "viewDiv",
  map,
  qualityProfile: "high",
  ui: {
    components: [],
  },
});

let compass = new Compass({
  view: view,
});

// adds the compass to the top left corner of the MapView
view.ui.add(compass, "top-left");

const pois = new GeoJSONLayer({
  url: "./data/points.geojson",
  renderer: new SimpleRenderer({
    symbol: new SimpleMarkerSymbol({
      color: [255, 255, 255, 1],
      size: 8,
      style: "circle",
      outline: {
        width: 1,
        color: [0, 0, 0, 0.5],
      },
    }),
  }),
  labelingInfo: [
    new LabelClass({
      labelExpressionInfo: {expression: "$feature.name"},
      labelPlacement: "center-right",
      symbol: new TextSymbol({
        color: [255, 255, 255, 1],
        haloSize: 1,
        haloColor: [0, 0, 0, 0.5],
        font: {
          size: 14,
          family: "Caveat",
          weight: "bold",
        },
      }),
    }),
  ],
});

const filterFeatures = (filter: string) => {
  pois.definitionExpression = filter;

  // = new FeatureEffect({
  //   filter: new FeatureFilter({
  //     where: filter,
  //   }),
  //   excludedEffect: "grayscale(100%) opacity(30%)",
  // });
};

map.add(pois);

const hikingLayer = new GeoJSONLayer({
  url: "./data/hike.geojson",
  renderer: new UniqueValueRenderer({
    field: "type",
    defaultSymbol: new SimpleLineSymbol({
      width: 3,
      color: [255, 255, 255],
      style: "short-dash",
      cap: "round",
      join: "round",
    }),
    uniqueValueInfos: [
      {
        value: "road",
        symbol: new SimpleLineSymbol({
          width: 3,
          color: [255, 255, 255],
          style: "solid",
          cap: "round",
          join: "round",
        }),
      },
    ],
  }),
  visible: false,
});

map.add(hikingLayer);

const displayHike = (value: boolean) => {
  hikingLayer.visible = value;
};

const route = new GeoJSONLayer({
  url: "./data/train-track.geojson",
  renderer: new SimpleRenderer({
    symbol: new SimpleLineSymbol({
      width: 3,
      color: [255, 255, 255],
      style: "solid",
      cap: "round",
      join: "round",
    }),
  }),
});

const animation = new LineLayerAnimation({
  sourceLayer: route,
});

animation.whenAnimatedLayer().then(animatedLayer => {
  map.add(animatedLayer);
});

function getScrollProgress(element: HTMLElement) {
  const elemRect = element.getBoundingClientRect();

  const top = elemRect.top;
  // map is covering up 30% of the window height
  const windowHeight = 0.65 * window.innerHeight || document.documentElement.clientHeight;

  const progress = Math.min(Math.max(windowHeight - top, 0.01), elemRect.height);
  return progress / elemRect.height;
}

interface SectionInfo {
  id: string;
  top: number;
  percentageTop: number;
}

let sectionsInfo: SectionInfo[] = [];
const sectionAnimations = {
  "section-1": 0,
  "section-3": 1,
  "section-4": 2,
  "section-5": 3,
  "section-6": 4,
  "section-8": 5,
  "section-9": 6,
  "section-10": 7,
};
let currentSectionId: null | string = null;
let previousSectionId: null | string = null;

const setSection = (section: string) => {
  switch (section) {
    case "section-0":
      filterFeatures(`name IN ('Coronado Island', 'User Conference')`);
      displayHike(false);
      break;
    case "section-1":
      filterFeatures(`1=2`);
      displayHike(false);
      break;
    case "section-2":
      filterFeatures(`name IN ('Hollywood Bowl', 'Griffith Observatory', 'Santa Monica beach', 'Walk of Fame')`);
      displayHike(false);
      break;
    case "section-3":
      filterFeatures(`name IN ('Laguna beach', 'Los Angeles')`);
      view.goTo(map.presentation.slides.getItemAt(3).viewpoint, {duration: 1500});
      displayHike(false);
      break;
    case "section-4":
      filterFeatures(`name IN ('Zuma beach', 'Los Angeles')`);
      displayHike(false);
      break;
    case "section-5":
      filterFeatures(`name IN ('Zuma beach','Santa Barbara', 'Los Angeles')`);
      displayHike(false);
      break;
    case "section-6":
      filterFeatures(`name IN ('Santa Barbara', 'Los Angeles', 'Pismo beach')`);
      displayHike(false);
      break;
    case "section-7":
      displayHike(true);
      filterFeatures(`name IN ('Andrew Molera State Park', 'beautiful beach')`);
      break;
    case "section-8":
      displayHike(false);
      filterFeatures(`name IN ('Carmel by the Sea')`);
      break;
    case "section-9":
      filterFeatures(`name IN ('Mission Dolores Park', '45th SF Marathon', 'Alcatraz Island')`);
      break;
    case "section-10":
      filterFeatures(`name IN ('Muir Woods National Monument', 'San Francisco')`);
      break;
  }

  if (section) {
    view.goTo(
      map.presentation.slides
        .filter(s => {
          return s.title.text === section;
        })
        .getItemAt(0).viewpoint,
      {duration: 1500}
    );
  }
};

const render = () => {
  if (currentSectionId) {
    if (currentSectionId === previousSectionId) {
      if (typeof sectionAnimations[currentSectionId] !== "undefined") {
        route.queryObjectIds().then(function (objectIds) {
          const id = sectionAnimations[currentSectionId as string];
          const routeObjectId = objectIds[id];
          if (typeof routeObjectId !== "undefined" && currentSectionId) {
            const scrollProgress = getScrollProgress(document.getElementById(currentSectionId) as HTMLElement);
            animation.seek(scrollProgress, routeObjectId);
          }
        });
      }
    } else {
      previousSectionId = currentSectionId;
      setSection(currentSectionId);
    }
  }
};

const calculateSectionsInfo = () => {
  const sectionsList = document.querySelectorAll("section");
  const sectionsArray = Array.from(sectionsList);
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  sectionsInfo = sectionsArray.map(section => {
    const sectionRect = section.getBoundingClientRect();
    const top = sectionRect.top;
    const percentageTop = top / windowHeight;
    if (percentageTop < 0.7) {
      currentSectionId = section.id;
    }
    return {
      id: section.id,
      top,
      percentageTop,
    };
  });
};
window.onscroll = e => {
  calculateSectionsInfo();
  render();
};

document.querySelectorAll(".media>img").forEach(element => {
  element.addEventListener("click", evt => {
    const modal = document.querySelector(".full-screen-modal") as HTMLElement;
    modal.classList.add("visible-full-screen-modal");
    const imageChild = (evt.target as HTMLImageElement).cloneNode(true);
    modal.appendChild(imageChild);
    modal.addEventListener(
      "click",
      evt => {
        modal.removeChild(imageChild);
        modal.classList.remove("visible-full-screen-modal");
      },
      {once: true}
    );
  });
});
