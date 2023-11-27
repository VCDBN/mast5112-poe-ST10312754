import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // In a real app, you'd make an API call to fetch book data based on the search term.
    // For this example, we simulate search results.
    const fakeSearchResults = [
      { id: 4, author: 'Author 4', title: 'Book 4', pages: 220 },
      { id: 5, author: 'Author 5', title: 'Book 5', pages: 270 },
      { id: 6, author: 'Author 6', title: 'Book 6', pages: 320 },
    ];

    setSearchResults(fakeSearchResults);
  };

  return (
    <View>
      <Text>Search Books</Text>
      <TextInput
        placeholder="Search for books"
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
            <Text>{item.genre}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchScreen;
