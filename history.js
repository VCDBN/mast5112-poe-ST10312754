import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';

const HistoryScreen = () => {
  const [historyText, setHistoryText] = useState('');

  // Simulated history data (you can replace this with actual data from your app)
  const fakeHistory = [
    { author: 'Author 1', title: 'Book 1', pages: 200, genre:'mystery' },
    { author: 'Author 2', title: 'Book 2', pages: 250, genre:'adventure' },
    { author: 'Author 3', title: 'Book 3', pages: 300, genre:'romance' },
  ];

  // Create a formatted history text
  const formattedHistory = fakeHistory.map(
    (book) => `${book.title} by ${book.author}, ${book.pages} pages\n`
  );

  // Join the formatted history text
  const historyTextToShow = formattedHistory.join('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Read Books History</Text>
      <ScrollView contentContainerStyle={styles.historyContainer}>
        <TextInput
          style={styles.historyText}
          multiline={true}
          editable={false}
          value={historyTextToShow}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    minHeight: 200,
  },
  historyText: {
    fontSize: 16,
  },
});

export default HistoryScreen;
