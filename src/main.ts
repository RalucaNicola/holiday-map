import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import LineLayerAnimation from "./lib/LineLayerAnimation";
import FeatureEffect from "@arcgis/core/layers/support/FeatureEffect";
import FeatureFilter from "@arcgis/core/layers/support/FeatureFilter";
import {PathSymbol3DLayer, SimpleMarkerSymbol, TextSymbol} from "@arcgis/core/symbols";
import LabelClass from "@arcgis/core/layers/support/LabelClass";
import Compass from "@arcgis/core/widgets/Compass";
import UniqueValueRenderer from "@arcgis/core/renderers/UniqueValueRenderer";
import WebScene from "@arcgis/core/WebScene";
import SceneView from "@arcgis/core/views/SceneView";
import Zoom from "@arcgis/core/widgets/Zoom";
import Fullscreen from "@arcgis/core/widgets/Fullscreen";

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

let fullscreen = new Fullscreen({
  view: view,
});
view.ui.add(fullscreen, "top-right");

// adds the compass to the top left corner of the MapView
view.ui.add(compass, "top-left");
view.ui.add(fullscreen, "top-right");

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
};

map.add(pois);

const pathsLayer = new GeoJSONLayer({
  url: "./data/paths.geojson",
  definitionExpression: "1=2",
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
});

map.add(pathsLayer);

const displayPaths = (filter: string) => {
  pathsLayer.definitionExpression = filter;
};

const route = new GeoJSONLayer({
  url: "./data/animated-paths.geojson",
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
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const progress = Math.min(Math.max((windowHeight / 2 - top) / elemRect.height, 0.0001), 1);
  return progress;
}

interface SectionInfo {
  id: string;
  current: boolean;
}

let sectionsInfo: SectionInfo[] = [];
const sectionAnimations = {
  "section-1": 0,
  "section-3": 1,
  "section-4": 2,
  "section-5": 3,
  "section-6": 4,
};
let currentSectionId: null | string = null;
let previousSectionId: null | string = null;

const setSection = (section: string | null) => {
  switch (section) {
    case "section-0":
      filterFeatures(`name IN ('Coronado Island', 'User Conference')`);
      goToSection(section);
      displayPaths(`1=2`);
      break;
    case "section-1":
      filterFeatures(`name IN ('San Diego', 'Los Angeles')`);
      goToSection(section, 2500);
      displayPaths(`1=2`);
      break;
    case "section-2":
      filterFeatures(`name IN ('Hollywood Bowl', 'Griffith Observatory', 'Santa Monica beach', 'Walk of Fame')`);
      goToSection(section);
      displayPaths(`1=2`);
      break;
    case "section-3":
      filterFeatures(`name IN ('Laguna beach', 'Los Angeles')`);
      goToSection(section);
      displayPaths(`1=2`);
      break;
    case "section-4":
      filterFeatures(`name IN ('Zuma beach', 'Los Angeles', 'Laguna beach')`);
      displayPaths(`1=2`);
      goToSection(section);
      break;
    case "section-5":
      filterFeatures(`name IN ('Zuma beach','Santa Barbara', 'Los Angeles')`);
      displayPaths(`1=2`);
      break;
    case "section-6":
      filterFeatures(`name IN ('Santa Barbara', 'Los Angeles', 'Pismo beach')`);
      displayPaths(`1=2`);
      goToSection(section);
      break;
    case "section-7":
      displayPaths(`name IN ('Pismo Beach - Big Sur', 'Big Sur hike')`);
      filterFeatures(
        `name IN ('Santa Barbara', 'Los Angeles', 'Pismo beach', 'Andrew Molera State Park', 'beautiful beach')`
      );
      goToSection(section, 4000);
      break;
    case "section-8":
      displayPaths(`name IN ('Pismo Beach - Big Sur', 'Big Sur - Carmel')`);
      filterFeatures(`name IN ('Carmel by the Sea')`);
      goToSection(section, 4000);
      break;
    case "section-9":
      filterFeatures(`name IN ('Carmel by the Sea', 'Mission Dolores Park', '45th SF Marathon', 'Alcatraz Island')`);
      displayPaths(`name IN ('Pismo Beach - Big Sur', 'Big Sur - Carmel', 'Carmel - San Francisco')`);
      goToSection(section, 4000);
      break;
    case "section-10":
      filterFeatures(`name IN ('Muir Woods National Monument', 'San Francisco')`);
      displayPaths(
        `name IN ('Pismo Beach - Big Sur', 'Big Sur - Carmel', 'Carmel - San Francisco', 'San Francisco - Muir')`
      );
      goToSection(section, 2000);
      break;
    default:
      filterFeatures(
        `name IN ('Muir Woods National Monument', 'San Francisco', 'San Diego', 'Los Angeles', 'Santa Barbara', 'Carmel by the Sea')`
      );
      goToSection("intro", 1500);
      break;
  }
};

function goToSection(title: string, duration = 1500) {
  view.goTo(
    map.presentation.slides
      .filter(s => {
        return s.title.text === title;
      })
      .getItemAt(0).viewpoint,
    {duration}
  );
}

const render = () => {
  if (currentSectionId && currentSectionId === previousSectionId) {
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
};

const calculateSectionsInfo = () => {
  const sectionsList = document.querySelectorAll("section");
  const sectionsArray = Array.from(sectionsList);
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  sectionsInfo = sectionsArray.map(section => {
    const sectionRect = section.getBoundingClientRect();
    const top = sectionRect.top;
    const sectionInfo = {
      id: section.id,
      current: false,
    };
    const percentage = (windowHeight / 2 - top) / sectionRect.height;
    if (percentage >= 0 && percentage <= 1) {
      sectionInfo.current = true;
    }
    return sectionInfo;
  });

  const currentSection = sectionsInfo.filter(s => s.current === true)[0];
  currentSectionId = currentSection ? currentSection.id : null;
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
