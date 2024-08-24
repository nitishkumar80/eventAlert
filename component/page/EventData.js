
import { ScrollView, Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Video } from 'expo-av';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
const EventData = ({ navigation }) => {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'), // Ensure correct font file
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

 


    const eventData = [
        {
          title: 'Campus Hackathon',
          date: '2025-08-25',
          time: '10:00 AM',
          location: 'Main Auditorium',
          description: `Join us for a day of coding challenges and networking. This event will feature multiple coding contests, workshops, and networking opportunities with industry leaders. Whether you are a beginner or an experienced coder, there will be something for everyone. Participants will work in teams to solve real-world problems, with exciting prizes for the winning teams. Breakfast, lunch, and dinner will be provided, along with an evening entertainment session to unwind after a day of coding.`,
          image: require('../../assets/hack.jpg'),
        },
        {
          title: 'Summer Hackathon',
          date: '2025-08-25',
          time: '12:00 AM',
          location: 'Main Auditorium',
          description: `Get ready for an all-night coding marathon at our Summer Hackathon! This event is designed for developers who love to work under the stars. Teams will compete in challenges that focus on mobile app development, web technologies, and AI. We will have guest speakers from top tech companies sharing insights on the latest trends in the industry. Participants will also enjoy midnight snacks, coffee stations, and a closing breakfast to celebrate the end of the hackathon. Prizes will be awarded to the most innovative and impactful projects.`,
          image: require('../../assets/summer.webp'),
        },
        {
          title: 'Winter Hackathon',
          date: '2025-02-25',
          time: '8:00 AM',
          location: 'Ranchi',
          description: `Join us for the Winter Hackathon, a unique event focused on building technology solutions for social good. Participants will be challenged to create projects that address community needs, from healthcare to education to environmental sustainability. We will have mentors available to guide teams through the development process, and a panel of judges from non-profit organizations and tech companies will evaluate the final presentations. The event will also feature a fireside chat with leaders in social innovation, and winners will receive grants to continue developing their projects.`,
          image: require('../../assets/winter.jpeg'),
        },
        {
          title: 'Tech Innovators Conference',
          date: '2025-09-15',
          time: '9:00 AM',
          location: 'Conference Hall B',
          description: `The Tech Innovators Conference is a premier event for students and professionals interested in the latest advancements in technology. The conference will feature keynote speakers from leading tech companies, panel discussions on emerging trends, and workshops on cutting-edge tools and techniques. Attendees will have the opportunity to network with industry experts, explore job opportunities, and learn about the future of technology. The conference will conclude with an awards ceremony recognizing the most innovative projects and ideas presented during the event.`,
          image: require('../../assets/tech.jpg'),
        },
        {
          title: 'AI and Robotics Expo',
          date: '2025-01-10',
          time: '10:00 AM',
          location: 'Exhibition Center',
          description: `Explore the future of AI and robotics at our annual expo. This event will showcase the latest developments in artificial intelligence, machine learning, and robotics. Attendees will have the chance to see live demonstrations of AI-powered robots, participate in hands-on workshops, and attend talks by leading researchers in the field. The expo will also feature a startup showcase where emerging companies will present their innovative AI solutions. Don't miss this opportunity to learn about the technologies that are shaping the future of our world.`,
          image: require('../../assets/ai.jpg'),
        },
        {
          title: 'Cybersecurity Bootcamp',
          date: '2025-11-05',
          time: '8:00 AM',
          location: 'Tech Lab 3',
          description: `The Cybersecurity Bootcamp is an intensive, hands-on training event designed to equip students with the skills needed to protect digital assets. Participants will learn about the latest cybersecurity threats, techniques for defending against attacks, and best practices for securing networks and systems. The bootcamp will include simulations of real-world cyber attacks, allowing attendees to practice their skills in a controlled environment. Experts from the cybersecurity industry will lead the sessions, and participants will have the opportunity to earn certifications upon completion.`,
          image: require('../../assets/cyber.jpeg'),
        },
        {
          title: 'Blockchain and Cryptocurrency Workshop',
          date: '2025-03-22',
          time: '1:00 PM',
          location: 'Innovation Hub',
          description: `Dive into the world of blockchain and cryptocurrency at our workshop. This event is perfect for students who want to learn about the fundamentals of blockchain technology, how cryptocurrencies work, and the potential applications of these technologies. The workshop will include hands-on activities, such as creating your own blockchain, understanding smart contracts, and exploring the future of decentralized finance (DeFi). Industry experts will share their insights on the current state of the market and what the future holds for blockchain and crypto.`,
          image: require('../../assets/block.jpeg'),
        },
        {
          title: 'Game Development Jam',
          date: '2025-10-12',
          time: '9:00 AM',
          location: 'Gaming Lab',
          description: `The Game Development Jam is a weekend-long event where students can come together to create their own video games. Participants will work in teams to design, develop, and test their games, with guidance from experienced game developers. The jam will cover all aspects of game development, including storyboarding, coding, graphic design, and sound engineering. At the end of the event, each team will present their game to a panel of judges, and the best games will be awarded prizes. This is a great opportunity to unleash your creativity and learn new skills in game development.`,
          image: require('../../assets/game.jpg'),
        },
        {
          title: 'Data Science Symposium',
          date: '2025-04-18',
          time: '10:00 AM',
          location: 'Main Auditorium',
          description: `Join us for the Data Science Symposium, a day-long event dedicated to exploring the latest trends and innovations in data science. The symposium will feature talks from leading data scientists, workshops on data analysis techniques, and case studies of successful data-driven projects. Attendees will learn how to harness the power of data to drive decision-making and innovation in various industries. The event will also include a poster session where students can present their research and receive feedback from experts in the field.`,
          image: require('../../assets/data.jpeg'),
        },
        {
          title: 'Startup Pitch Night',
          date: '2025-12-01',
          time: '7:00 PM',
          location: 'Entrepreneurship Center',
          description: `Startup Pitch Night is an exciting event where aspiring entrepreneurs can present their business ideas to a panel of investors, mentors, and industry leaders. Participants will have a limited time to pitch their startup concepts, followed by a Q&A session with the judges. The event is designed to help students refine their pitching skills, receive valuable feedback, and potentially secure funding for their ventures. The evening will also include networking opportunities and a reception to celebrate the entrepreneurial spirit on campus.`,
          image: require('../../assets/startup.jpeg'),
        },
        {
          title: 'Environmental Sustainability Summit',
          date: '2025-05-20',
          time: '9:00 AM',
          location: 'Green Hall',
          description: `The Environmental Sustainability Summit is a gathering of students, faculty, and professionals dedicated to promoting sustainability on campus and beyond. The summit will feature keynote speakers, panel discussions, and workshops on topics such as renewable energy, waste reduction, and sustainable agriculture. Attendees will learn about the latest innovations in sustainability and how they can contribute to a greener future. The event will also include a sustainability expo where companies and organizations will showcase their eco-friendly products and services.`,
          image: require('../../assets/world.jpg'),
        },
      ];
      

  return (
    <View style={styles.container}>
      <Video
        source={require('../../assets/Stripes.mp4')}
        style={styles.backgroundVideo}
        resizeMode="cover"
        shouldPlay
        isLooping
      />
      <View style={styles.overlay} />
      <Text style={styles.event}>EVENT VIEW</Text>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {eventData.map((event, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.card} 
            onPress={() => navigation.navigate('EventDetails', { event })}
          >
            <Image source={event.image} style={styles.image} />
            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.date}>{event.date}</Text>
            <Text style={styles.time}>{event.time}</Text>
            <Text style={styles.location}>{event.location}</Text>
            <Text style={styles.description}>
              {event.description.length > 100 ? `${event.description.substring(0, 100)}...` : event.description}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    marginTop: 50,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundVideo: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 100, // Add padding for the end of the content
    zIndex: 1,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
   
  },
  date: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
  time: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: 'white',
    marginBottom: 15,
    textAlign: 'justify',
  },


  event:{
color:'white',
fontSize:27,
marginTop:20,
fontFamily: 'Poppins-Bold',
  },
});

export default EventData;
