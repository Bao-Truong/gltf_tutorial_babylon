import {
  Engine,
  SceneLoader,
  HemisphericLight,
  Vector3,
  ArcRotateCamera,
  Scene,
} from "babylonjs";
import "babylonjs-loaders";

// Import our glTF model.
import gltf from "../scene/Lantern.gltf";
import gltf2 from "../scene/Fox.gltf";

// Create the engine and scene, which will consist of one light and the main camera.
const canvas = document.getElementById("canvas");
const engine = new Engine(canvas, true);
const scene = new Scene(engine);
const light = new HemisphericLight("HemiLight", new Vector3(0, 1, 0), scene);
const camera = new ArcRotateCamera(
  "camera1",
  0,
  1,
  220,
  new Vector3(0, 20, 0),
  scene
);
camera.attachControl(canvas, false);

// Load the glTF model and add it to the scene.
SceneLoader.Append("", gltf, scene);
SceneLoader.Append("", gltf2, scene);

// Instruct the engine to resize when the window does.
window.addEventListener("resize", () => engine.resize());

// Start the engine’s main render loop.
engine.runRenderLoop(() => scene.render());
