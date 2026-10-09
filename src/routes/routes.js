import {
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("/App.jsx", [
    index("routes/home.jsx"),
    route("bot/:id", "routes/IndividualProject.jsx"),
  ]),
];
