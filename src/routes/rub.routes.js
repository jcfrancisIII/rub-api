import {
  addNewContact,
  getContacts,
  getContactWithID,
  updateContact,
  deleteContact
} from "../controllers/rub.controller";

const routes = app => {
  app
    .route("/contact")
    .get((req, res, next) => {
      // middleware
      console.log(`Request from : ${req.originalUrl}`);
      console.log(`Request from : ${req.method}`);
      next();
    }, getContacts)

    // POST endpoint
    .post(addNewContact);
  app
    .route("/contact/:contactId")
    // get specific contact by ID
    .get(getContactWithID)
    // put request
    .put(updateContact)
    // delete request
    .delete(deleteContact);
};

export default routes;
