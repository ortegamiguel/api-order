import { Router } from "express";
import {
  deleteClient,
  getAllClients,
  saveClient,
} from "../controllers/client.controller.js";
import {
  deleteEmploye,
  getAllEmployes,
  saveEmploye,
} from "../controllers/employe.controller.js";
import {
  deleteFamily,
  getAllFamilies,
  saveFamily,
} from "../controllers/family.controller.js";
import {
  deletePart,
  getAllParts,
  savePart,
} from "../controllers/part.controller.js";
import {
  deletePosition,
  getAllPositions,
  savePosition,
} from "../controllers/position.controller.js";
import {
  deleteProduct,
  getAllProducts,
  saveProduct,
} from "../controllers/product.controller.js";
import {
  deleteRepairOrder,
  getAllRepairOrders,
  saveRepairOrder,
  updateRepairOrder,
} from "../controllers/repairOrder.controller.js";
import {
  deleteSupplier,
  getAllSuppliers,
  saveSupplier,
  updateSupplier,
} from "../controllers/supplier.controller.js";
import { createUser, login } from "../controllers/user.controller.js";

const router = Router();

//Auth route
router.post("/login", login);
router.post("/createUser", createUser);

// Family routes
router.post("/families", saveFamily);
router.delete("/families/:id", deleteFamily);
router.get("/families", getAllFamilies);

//Parts routes
router.post("/part", savePart);
router.delete("/part/:id", deletePart);
router.get("/part", getAllParts);

// Position routes
router.post("/position", savePosition);
router.delete("/position/:id", deletePosition);
router.get("/position", getAllPositions);

//Supplier routes
router.post("/supplier", saveSupplier);
router.put("/supplier/:id", updateSupplier);
router.delete("/supplier/:id", deleteSupplier);
router.get("/suppliers", getAllSuppliers);

//Product routes
router.post("/product", saveProduct);
router.delete("/product/:id", deleteProduct);
router.get("/product", getAllProducts);

//Employe routes
router.post("/employe", saveEmploye);
router.delete("/employe/:id", deleteEmploye);
router.get("/employe", getAllEmployes);

//Clients routes
router.post("/clients", saveClient);
router.delete("/clients/:id", deleteClient);
router.get("/clients", getAllClients);

//repair orders routes
router.post("/repair-orders", saveRepairOrder);
router.put("/repair-orders/:id", updateRepairOrder);
router.delete("/repair-orders/:id", deleteRepairOrder);
router.get("/repair-orders", getAllRepairOrders);

export default router;
