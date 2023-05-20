import { View, Text, Button, Modal } from 'react-native';
import { modal_style } from '../styles/modal';

const AppointmentPredictionModal = ({ summary, modalIsOpen, setModalIsOpen }) => {
  return (
    <Modal
      visible={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      animationType="slide"
      transparent={true}
    >
      <View style={modal_style.modalBackground}>
        <View style={modal_style.modalContainer}>
          <Text style={modal_style.modalSubtitle}>Appointment Prediction Summary</Text>

          <Text style={modal_style.modalSubtitle}>Patient description</Text>
          <Text>
            {summary && summary.message && summary.message.patient_description}
          </Text>

          <Text style={modal_style.modalSubtitle}>Patient results</Text>
          <Text>
            The patient will show up to the scheduled appointment: {summary && summary.message && summary.message.prediction}
          </Text>

          <Text style={modal_style.modalSubtitle}>Patient show up probability</Text>
          <Text>
            Probability of showing up to the appointment is equal to: {summary && summary.message && summary.message.proba_show}%.{"\n"}
            Probability of not showing up to the appointment is equal to: {summary && summary.message && summary.message.proba_not_show}%.
          </Text>

          <View style={modal_style.modalButtonContainer}>
            <Button style={modal_style.modalButton} title="Close" onPress={() => setModalIsOpen(false)} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AppointmentPredictionModal;
