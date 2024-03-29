import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Dimensions,
} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import SearchIcon from '../assets/images/SearchIcon.png';
import colors from '../themes/Colors';
import CustomButton from '../components/CustomButton';
import TodoItem from '../components/TodoItem';
import {useNavigation} from '@react-navigation/native';
import ScreenName from '../constants/ScreenName';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TaskListScreen() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [tasks, setTask] = useState([
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      status: 'closed',
    },
    {
      userId: 1,
      id: 2,
      title: 'delectus aut autem',
      status: 'done',
    },
    {
      userId: 1,
      id: 3,
      title: 'delectus aut autem',
      status: 'open',
    },
    {
      userId: 1,
      id: 2,
      title: 'delectus aut autem',
      status: 'done',
    },
    {
      userId: 1,
      id: 3423,
      title: 'delectus aut autem',
      status: 'open',
    },
    {
      userId: 1,
      id: 2342342,
      title: 'delectus aut autem',
      status: 'done',
    },
    {
      userId: 1,
      id: 23432,
      title: 'delectus aut autem',
      status: 'open',
    },
  ]);

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Tasks</Text>
      </View>
    );
  };

  const renderEmptyList = () => {
    return (
      <View style={styles.emptyListContainer}>
        <Icon name="text-box-remove" size={60} color={'gray'} />
        <Text style={styles.emptyText}>Empty Task</Text>
      </View>
    );
  };

  useEffect(() => {
    //loadTodos();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.mainContentContainer}>
        <SafeAreaView style={[styles.container, {marginBottom: 20}]}>
          <CustomTextInput
            onChangeText={setSearchText}
            value={searchText}
            imageSource={SearchIcon}
            style={{marginHorizontal: 0}}
            placeholder="Task Ara"
          />
          <FlatList
            data={tasks}
            keyExtractor={item => item.id?.toString()}
            ListHeaderComponent={renderHeader}
            ListEmptyComponent={renderEmptyList}
            renderItem={({item}) => <TodoItem data={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 50}}
          />
        </SafeAreaView>
        <CustomButton
          onPress={() => navigation.navigate(ScreenName.addTask)}
          label="Add Task"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
    // alignItems: 'center',
  },
  mainContentContainer: {
    height: '100%',
    width: Dimensions.get('screen').width,
    position: 'absolute',
    padding: 20,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.text.primary,
    //textAlign: 'center',
  },
  headerContainer: {
    marginBottom: 10,
    // backgroundColor: colors.white,
    // padding: 10,
    // borderRadius: 10,
  },
  emptyText: {fontSize: 15, fontWeight: '500', color: 'gray'},
  emptyListContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  inputContainer: {flexDirection: 'row', marginBottom: 10},
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
    borderColor: 'gray',
  },
  todoItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    marginLeft: 10,
    padding: 5,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  addButton: {backgroundColor: 'blue'},
  updateButton: {backgroundColor: 'green'},
  buttonText: {color: '#fff'},
});
