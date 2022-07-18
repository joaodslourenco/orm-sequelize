const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router.get("/pessoas", PessoaController.getAllActivePeople);
router.get("/pessoas/todos", PessoaController.getAllPeople);
router.get("/pessoas/:id", PessoaController.getPersonById);
router.get(
  "/pessoas/matricula/:turmaId/confirmadas",
  PessoaController.getRegistrationsByClass,
);
router.get("/pessoas/matricula/lotada", PessoaController.getFullClasses);
router.get(
  "/pessoas/:estudanteId/matricula",
  PessoaController.getRegistrations,
);
router.get(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.getRegistrationById,
);

router.post("/pessoas", PessoaController.addPerson);
router.post(
  "/pessoas/:estudanteId/matricula",
  PessoaController.addRegistration,
);
router.post("/pessoas/:id/restaura", PessoaController.restorePerson);
router.post("/pessoas/:estudanteId/cancela", PessoaController.cancelPerson);

router.put("/pessoas/:id", PessoaController.updatePerson);
router.put(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.updateRegistration,
);

router.delete("/pessoas/:id", PessoaController.deletePerson);
router.delete(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.deleteRegistration,
);

module.exports = router;
