import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal, TextInput, Button, Alert, ToastAndroid, Platform } from 'react-native';

const EventDetailsScreen = ({ route }) => {
  const { event } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    eventName: event.title,
    name: '',
    email: '',
    phone: '',
    scheduledDate: '' // New field for event scheduling
  });

  const validateForm = () => {
    const { eventName, name, email, phone, scheduledDate } = formData;
    if (!eventName || !name || !email || !phone || !scheduledDate) {
      if (Platform.OS === 'android') {
        ToastAndroid.show('Please fill out all fields!', ToastAndroid.SHORT);
      } else {
        Alert.alert('Error', 'Please fill out all fields!');
      }
      return false;
    }
    return true;
  };

  const handleRegister = () => {
    if (validateForm()) {
      Alert.alert('Success', `Registered for ${formData.eventName} with Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, Scheduled Date: ${formData.scheduledDate}`);
      setModalVisible(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={event.image} style={styles.image} />
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.date}>{event.date} {event.time}</Text>
      <Text style={styles.location}>{event.location}</Text>
      <Text style={styles.description}>{event.description}</Text>

      <TouchableOpacity style={styles.register} onPress={() => setModalVisible(true)}>
        <Text style={styles.now}>Register Now</Text>
      </TouchableOpacity>

      {/* Modal for Registration Form */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Register for Event</Text>
            <TextInput
              placeholder="Event Name"
              style={styles.input}
              value={formData.eventName}
              onChangeText={(text) => setFormData({ ...formData, eventName: text })}
            />
            <TextInput
              placeholder="Name"
              style={styles.input}
              value={formData.name}
              onChangeText={(text) => setFormData({ ...formData, name: text })}
            />
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              keyboardType="email-address"
            />
            <TextInput
              placeholder="Phone"
              style={styles.input}
              value={formData.phone}
              onChangeText={(text) => setFormData({ ...formData, phone: text })}
              keyboardType="phone-pad"
            />
            <TextInput
              placeholder="Scheduled Date"
              style={styles.input}
              value={formData.scheduledDate}
              onChangeText={(text) => setFormData({ ...formData, scheduledDate: text })}
              keyboardType="default"
            />
            <View style={styles.buttonContainer}>
              <Button title="Submit" onPress={handleRegister} />
              <Button title="Cancel" color="red" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontFamily: 'Poppins-Bold',
  },
  date: {
    fontSize: 18,
    marginBottom: 5,
  },
  location: {
    fontSize: 18,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'justify',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  register: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  now: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalTitle: {
    fontSize: 25,
    marginBottom: 15,
    fontFamily: 'Poppins-Bold',
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default EventDetailsScreen;
