import { StyleSheet } from 'react-native';


export const modal_style = StyleSheet.create({
    content: {
        maxHeight: "40vh"
    },
    modalContent: {
      padding: 20
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10
    },
    modalLine: {
      borderBottomWidth: 1,
      borderBottomColor: '#aaa',
      width: '100%',
      marginBottom: 10
    },
    modalSubtitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20
    },
    modalButtonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 5,
    },      
    modalButton: {
      backgroundColor: '#007AFF',
      borderRadius: 10,
      padding: 10,
      marginTop: 30
    },
    modalButtonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center'
    }
  });