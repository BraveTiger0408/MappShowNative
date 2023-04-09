import { View, Text, Button } from 'react-native';
import Modal from 'react-modal';
import { modal_style } from '../styles/modal';

Modal.setAppElement('#root');


const AppointmentPredictionModal = ({ summary, modalIsOpen, setModalIsOpen }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      style={modal_style}
      contentLabel="Appointment Prediction"
    >
    <View>
        <Text style={modal_style.modalSubtitle}>Appointment Prediction Summary</Text>
        <hr />
        <Text style={modal_style.modalSubtitle}>Patient description</Text>
        <Text>
        {summary && summary.message && summary.message.patient_description}
        </Text>
        <hr />
        <Text style={modal_style.modalSubtitle}>Patient results</Text>
        <Text>
            The patient will show up to the scheduled appointment: {summary && summary.message && summary.message.prediction}
        </Text>
        <hr />
        <Text style={modal_style.modalSubtitle}>Patient show up probability</Text>
        <Text>
            Probability of showing up to the appointment is equal to: {summary && summary.message && summary.message.proba_show}%.
            Probability of not showing up to the appointment is equal to: {summary && summary.message && summary.message.proba_not_show}%.
        </Text>
        <hr />
        <View style={modal_style.modalButtonContainer}>
            <Button style={modal_style.modalButton} title="Close" onPress={() => setModalIsOpen(false)} />
        </View>
      </View>
    </Modal>
  );
};

export default AppointmentPredictionModal;
