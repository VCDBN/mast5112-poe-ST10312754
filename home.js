import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // In a real app, you'd make an API call to fetch book data based on the search term.
    // For this example, we simulate search results.
    const fakeSearchResults = [
      { id: 1, author: 'Author 1', title: 'Book 1', pages: 200, genre:'mystery' },
      { id: 2, author: 'Author 2', title: 'Book 2', pages: 250, genre:'mystery' },
      { id: 3, author: 'Author 3', title: 'Book 3', pages: 300, genre:'mystery' },
    ];

    setSearchResults(fakeSearchResults);
  };

  return (
    <View>
      <Text>Book Search App</Text>
      <TextInput
        placeholder="Search books"
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
      />
      <Button title="Search" onPress={handleSearch} />
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.author}</Text>
            <Text>{`${item.pages} pages`}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
