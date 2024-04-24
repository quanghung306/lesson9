import React, { useEffect, useState } from "react";
import FormContainer from "../containers/FormContainer";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useAppContext } from "../contexts/AppContainer.context";

function NewContainer(args) {
  const appContext = useAppContext();
  const { editInfoData } = appContext;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    if (editInfoData) {
      setModal(true);
    }
  }, [editInfoData]);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Creart New Account
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Create new account</ModalHeader>
        <ModalBody>
          <FormContainer editInfoData={editInfoData} />
        </ModalBody>
        <ModalFooter>
          {/* <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '} */}
          <Button color="danger" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
export default NewContainer;
