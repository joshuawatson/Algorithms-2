var instructions = {};

instructions.linearSearch = [
  {line: 3},
  {line: 0, variables: [{name: 'i', value: 0, index: 0}], nodes: [0]},
  {line: 1, comparison: {index: 0, value: '== 6', result: false}, nodes: [0]},
  {line: 0, variables: [{name: 'i', value: 1, index: 1}], nodes: [1]},
  {line: 1, comparison: {index: 1, value: '== 6', result: false}, nodes: [1]},
  {line: 0, variables: [{name: 'i', value: 2, index: 2}], nodes: [2]},
  {line: 1, comparison: {index: 2, value: '== 6', result: true}, nodes: [2]},
  {line: 2, showReturn: {index: 2, value: 2}},
];

instructions.dynamicArray = [
  {line: 5, show: [0, 1]},
  {line: 6},
  {line: 0, comparison: {index: 0, value: '0 == 1', result: false}},
  {line: 2, nodes: [0], set: {0: '2'}},  
  {line: 7},
  {line: 0, comparison: {index: 1, value: '1 == 1', result: true}},
  {line: 1},
  {line: 3, show: [2, 3, 4]},
  {line: 4, set: {2: '2'}, nodes: [2]},
  {line: 2, nodes: [3], set: {3: '9', 0: ''}}, 
  {line: 8},
  {line: 0, comparison: {index: 4, value: '2 == 2', result: true}},
  {line: 1},
  {line: 3, show: [5, 6, 7, 8]},
  {line: 4, set: {5: '2'}, nodes: [5]},
  {line: 4, set: {6: '9'}, nodes: [6]},
  {line: 2, nodes: [7], set: {7: '4', 2: '', 3: ''}}
];

instructions.linkedList1 = [
  {line: 6},
  {line: 7},
  {line: 0, show: [0], set: {0: '1'}, nodes: [0]},
  {line: 1, comparison: {index: 0, value: 'head == null', result: true}},
  {line: 2, variables: [{name: 'head', index: 0, sticky: true}], nodes: [0]},
  {line: 3, comparison: {index: 0, value: 'tail != null', result: false}},
  {line: 5, variables: [{name: 'head/tail', index: 0, sticky: true}], nodes: [0]},
  {line: 8},
  {line: 0, show: [1, 2], set: {2: '2'}, nodes: [2]},
  {line: 1, comparison: {index: 0, value: 'head == null', result: false}},
  {line: 3, comparison: {index: 0, value: 'tail != null', result: true}},
  {line: 4, references: [{from: 0, to: 2, sticky: true, left: 50}], nodes: [0, 2]},
  {line: 5, variables: [{name: 'head', index: 0, sticky: true}, {name: 'tail', index: 2, sticky: true}], nodes: [2]},
  {line: 9},
  {line: 0, show: [3, 4], set: {4: '3'}, nodes: [4]},
  {line: 1, comparison: {index: 0, value: 'head == null', result: false}},
  {line: 3, comparison: {index: 2, value: 'tail != null', result: true}},
  {line: 4, references: [{from: 2, to: 4, sticky: true, left: 300}], nodes: [2, 4]},
  {line: 5, variables: [{name: '', index: 2}, {name: 'tail', index: 4, sticky: true}], nodes: [4]}
];

instructions.linkedList2 = [
  {line: 7},
  {line: 0, variables: [{name: 'node', index: 0, sticky: true}], nodes:[0]},
  {line: 1, comparison: {index: 0, value: '0 < 1', result: true}, nodes:[0]},
  {line: 2, variables: [{name: 'node/prev', index: 0}], nodes:[0]},
  {line: 3, variables: [{name: 'prev', index: 0, sticky: true}, {name: 'node', index: 2, sticky: true}], nodes:[2]},
  {line: 1, comparison: {index: 2, value: '1 < 1', result: false}, nodes:[2]},
  {line: 4, comparison: {index: 0, value: 'prev == null', result: false}, nodes:[0]},
  {line: 6, nodes:[0, 4], references: [{from: 0, to: 4, left: 50}], set: {2: ''}, refremove:[0]}
];

instructions.linkedList2Init = {
  variables: [{name: 'head', index: 0, sticky: true}, {name: 'tail', index: 4, sticky: true}], 
  references: [{from: 0, to: 2, sticky: true, left: 50}, {from: 2, to: 4, left: 300}], set:{2: '2'}
};


instructions.hashTable1 = [
  {line: 7},
  {line: 0, show:[0, 1, 2]},
  {line: 8},
  {line: 1},
  {line: 3, variables: [{name: 'sum', value: 0, index: 2, sticky: true}]},
  {line: 4, comparison: {index: 2, value: '0 < 4', result: true}},
  {line: 5, variables: [{name: 'sum', value: 5, index: 2, sticky: true}], comparison: {index: 2, value: '0 + 102 - 97', result: true}},
  {line: 4, comparison: {index: 2, value: '1 < 4', result: true}},
  {line: 5, variables: [{name: 'sum', value: 9, index: 2, sticky: true}], comparison: {index: 2, value: '5 + 101 - 97', result: true}},
  {line: 4, comparison: {index: 2, value: '2 < 4', result: true}},
  {line: 5, variables: [{name: 'sum', value: 9, index: 2, sticky: true}], comparison: {index: 2, value: '9 + 97 - 97', result: true}},
  {line: 4, comparison: {index: 2, value: '3 < 4', result: true}},
  {line: 5, variables: [{name: 'sum', value: 26, index: 2, sticky: true}], comparison: {index: 2, value: '9 + 114 - 97', result: true}},
  {line: 4, comparison: {index: 2, value: '4 < 4', result: false}},
  {line: 6, variables: [{name: '2', value: '26 % 3', index:2}]},
  {line: 2, variables: [{name: 'index', value: '2', index:2}], set: {2: 'fear'}, nodes:[2]},
  {line: 9},
  {line: 1, variables: [{name: 'index', value: '0', index:0}]},
  {line: 2, variables: [{name: 'index', value: '0', index:0}], set: {0: 'is the'}, nodes:[0]},
  {line: 10},
  {line: 1, variables: [{name: 'index', value: '1', index:1}]},
  {line: 2, variables: [{name: 'index', value: '1', index:1}], set: {1: 'little death'}, nodes:[1]}
];

instructions.hashTable2 = [
  {line: 5},
  {line: 0, show:[0, 1, 2, 3, 4]},
  {line: 1, comparison: {index: 0, value: '0 < 5', result: true}},
  {line: 2, nodes: [0]},
  {line: 1, comparison: {index: 1, value: '1 < 5', result: true}},
  {line: 2, nodes: [1]},
  {line: 1, comparison: {index: 2, value: '2 < 5', result: true}},
  {line: 2, nodes: [2]},
  {line: 1, comparison: {index: 3, value: '3 < 5', result: true}},
  {line: 2, nodes: [3]},
  {line: 1, comparison: {index: 4, value: '4 < 5', result: true}},
  {line: 2, nodes: [4]},
  {line: 1, comparison: {index: 4, value: '5 < 5', result: false}},
  {line: 6},
  {line: 3, variables: [{name: 'index', value: '3', index:3}]},
  {line: 4, variables: [{name: 'index', value: '3', index:3}], set: {3: 'i'}, nodes:[3]},
  {line: 7},
  {line: 3, variables: [{name: 'index', value: '2', index:2}]},
  {line: 4, variables: [{name: 'index', value: '2', index:2}], set: {2: 'will'}, nodes:[2]},
  {line: 8},
  {line: 3, variables: [{name: 'index', value: '1', index:1}]},
  {line: 4, variables: [{name: 'index', value: '1', index:1}], set: {1: 'face'}, nodes:[1]},
  {line: 9},
  {line: 3, variables: [{name: 'index', value: '1', index:1}]},
  {line: 4, show:[5], variables: [{name: 'index', value: '1', index:1}], set: {5: 'my'}, nodes:[5], showList: [1]},
  {line: 10},
  {line: 3, variables: [{name: 'index', value: '1', index:1}]},
  {line: 4, show:[6], variables: [{name: 'index', value: '1', index:1}], set: {6: 'fear'}, nodes:[6], showList: [2]}
];

instructions.binarySearch = [
  {line: 9},
  {line: 0},
  {line: 1, variables: [{name: 'start', index: 0, sticky: true}, {name: 'end', index: 11, sticky: true}], comparison: {index: 0, value: '0 > 11', result: false}, nodes: [0, 11]},
  {line: 2, variables: [{name: 'middle', index: 5}], nodes: [5]},
  {line: 3, variables: [{name: 'value', index: 5, sticky: true}], nodes: [5]},
  {line: 4, comparison: {index:5, value: '13 > 20', result: false}, nodes: [5]},
  {line: 6, comparison: {index:5, value: '13 < 20', result: true}, nodes: [5]},
  {line: 7},
  {line: 1, variables: [{name: '', index: 5}, {name: '', index: 0}, {name: 'start', index: 6, sticky: true}], comparison: {index: 6, value: '6 > 11', result: false}, nodes: [6, 11]},
  {line: 2, variables: [{name: 'middle', index: 8}], nodes: [8]},
  {line: 3, variables: [{name: 'value', index: 8, sticky: true}], nodes: [8]},
  {line: 4, comparison: {index:8, value: '19 > 20', result: false}, nodes: [8]},
  {line: 6, comparison: {index:8, value: '19 < 20', result: true}, nodes: [8]},
  {line: 7},
  {line: 1, variables: [{name: '', index: 8}, {name: '', index: 6}, {name: 'start', index: 9, sticky: true}], comparison: {index: 6, value: '9 > 11', result: false}, nodes: [9, 11]},
  {line: 2, variables: [{name: 'middle', index: 10}], nodes: [10]},
  {line: 3, variables: [{name: 'value', index: 10, sticky: true}], nodes: [10]},
  {line: 4, comparison: {index:10, value: '22 > 20', result: true}, nodes: [10]},
  {line: 5},
  {line: 1, variables: [{name: '', index: 9}, {name: '', index: 10}, {name: 'start/end', index: 9, sticky: true}, {name: '', index: 11}], comparison: {index: 9, value: '9 > 9', result: false}, nodes: [9]},
  {line: 2, variables: [{name: 'middle', index: 9}], nodes: [9]},
  {line: 3, variables: [{name: 'value', index: 9, sticky: true}], nodes: [9]},
  {line: 4, comparison: {index:9, value: '20 > 20', result: false}, nodes: [9]},
  {line: 6, comparison: {index:9, value: '20 < 20', result: false}, nodes: [9]},
  {line: 8, variables: [{name: 'middle', value: '9', index: 9}], nodes: [9]},
  {line: 10}
];

instructions.bubbleSort = [
  {line: 8},
  {line: 0, variables: [{name: 'length', value: '5', index:5}]},
  {line: 1, comparison: {index: 0, value: '0 < 5', result: true}, variables: [{name: 'i', value: '0', index: 0}]},
  {line: 2, comparison: {index: 0, value: '7 > 4', result: true}, nodes:[0, 1]},
  {line: 3, variables: [{name: 'temp', value: '7', index: 1, sticky: true}], nodes:[0]},
  {line: 4, set:{0:'4'}, nodes:[0]},
  {line: 5, set:{1:'7'}, nodes:[1], variables: [{name: '', index: 1}]},
  {line: 6, variables: [{name: 'swapped', index: 0, value: 'true'}]},
  {line: 1, comparison: {index: 1, value: '1 < 5', result: true}, variables: [{name: 'i', value: '1', index: 1}]},
  {line: 2, comparison: {index: 1, value: '7 > 5', result: true}, nodes:[1, 2]},
  {line: 3, variables: [{name: 'temp', value: '7', index: 2, sticky: true}], nodes:[1]},
  {line: 4, set:{1:'5'}, nodes:[1]},
  {line: 5, set:{2:'7'}, nodes:[2], variables: [{name: '', index: 2}]},
  {line: 6, variables: [{name: 'swapped', index: 1, value: 'true'}]},
  {line: 1, comparison: {index: 2, value: '2 < 5', result: true}, variables: [{name: 'i', value: '2', index: 2}]},
  {line: 2, comparison: {index: 2, value: '7 > 2', result: true}, nodes:[2, 3]},
  {line: 3, variables: [{name: 'temp', value: '7', index: 3, sticky: true}], nodes:[2]},
  {line: 4, set:{2:'2'}, nodes:[2]},
  {line: 5, set:{3:'7'}, nodes:[3], variables: [{name: '', index: 3}]},
  {line: 6, variables: [{name: 'swapped', index: 2, value: 'true'}]},
  {line: 1, comparison: {index: 3, value: '3 < 5', result: true}, variables: [{name: 'i', value: '3', index: 3}]},
  {line: 2, comparison: {index: 3, value: '7 > 9', result: false}, nodes:[3, 4]},
  {line: 1, comparison: {index: 4, value: '4 < 5', result: true}, variables: [{name: 'i', value: '4', index: 4}]},
  {line: 2, comparison: {index: 4, value: '9 > 1', result: true}, nodes:[4, 5]},
  {line: 3, variables: [{name: 'temp', value: '9', index: 5, sticky: true}], nodes:[4]},
  {line: 4, set:{4:'1'}, nodes:[4]},
  {line: 5, set:{5:'9'}, nodes:[5], variables: [{name: '', index: 5}]},
  {line: 6, variables: [{name: 'swapped', index: 4, value: 'true'}]},
  {line: 7, comparison: {index: 0, value: 'swaped == true', result: true}},
  {line: 1, comparison: {index: 0, value: '0 < 5', result: true}, variables: [{name: 'i', value: '0', index: 0}]},
  {line: 2, comparison: {index: 0, value: '4 > 5', result: false}, nodes:[0, 1]},
  {line: 1, comparison: {index: 1, value: '1 < 5', result: true}, variables: [{name: 'i', value: '1', index: 1}]},
  {line: 2, comparison: {index: 1, value: '5 > 2', result: true}, nodes:[1, 2]},
  {line: 3, variables: [{name: 'temp', value: '5', index: 2, sticky: true}], nodes:[2]},
  {line: 4, set:{1:'2'}, nodes:[1]},
  {line: 5, set:{2:'5'}, nodes:[2], variables: [{name: '', index: 2}]},
  {line: 6, variables: [{name: 'swapped', index: 1, value: 'true'}]},
  {line: 1, comparison: {index: 2, value: '2 < 5', result: true}, variables: [{name: 'i', value: '2', index: 2}]},
  {line: 2, comparison: {index: 2, value: '5 > 7', result: false}, nodes:[2, 3]},
  {line: 1, comparison: {index: 3, value: '3 < 5', result: true}, variables: [{name: 'i', value: '3', index: 3}]},
  {line: 2, comparison: {index: 3, value: '7 > 1', result: true}, nodes:[3, 4]},
  {line: 3, variables: [{name: 'temp', value: '7', index: 4, sticky: true}], nodes:[3]},
  {line: 4, set:{3:'1'}, nodes:[3]},
  {line: 5, set:{4:'7'}, nodes:[4], variables: [{name: '', index: 4}]},
  {line: 6, variables: [{name: 'swapped', index: 3, value: 'true'}]},
  {line: 1, comparison: {index: 4, value: '4 < 5', result: true}, variables: [{name: 'i', value: '4', index: 4}]},
  {line: 2, comparison: {index: 4, value: '7 > 9', result: false}, nodes:[4, 5]},
  {line: 7, comparison: {index: 0, value: 'swaped == true', result: true}},
  {line: 1, comparison: {index: 0, value: '0 < 5', result: true}, variables: [{name: 'i', value: '0', index: 0}]},
  {line: 2, comparison: {index: 0, value: '4 > 2', result: true}, nodes:[0, 1]},
  {line: 3, variables: [{name: 'temp', value: '4', index: 1, sticky: true}], nodes:[0]},
  {line: 4, set:{0:'2'}, nodes:[0]},
  {line: 5, set:{1:'4'}, nodes:[1], variables: [{name: '', index: 1}]},
  {line: 6, variables: [{name: 'swapped', index: 0, value: 'true'}]},
  {line: 1, comparison: {index: 1, value: '1 < 5', result: true}, variables: [{name: 'i', value: '1', index: 1}]},
  {line: 2, comparison: {index: 1, value: '4 > 5', result: false}, nodes:[1, 2]},
  {line: 1, comparison: {index: 2, value: '2 < 5', result: true}, variables: [{name: 'i', value: '2', index: 2}]},
  {line: 2, comparison: {index: 2, value: '5 > 1', result: true}, nodes:[2, 3]},
  {line: 3, variables: [{name: 'temp', value: '5', index: 3, sticky: true}], nodes:[2]},
  {line: 4, set:{2:'1'}, nodes:[2]},
  {line: 5, set:{3:'5'}, nodes:[3], variables: [{name: '', index: 3}]},
  {line: 6, variables: [{name: 'swapped', index: 2, value: 'true'}]},
  {line: 1, comparison: {index: 3, value: '3 < 5', result: true}, variables: [{name: 'i', value: '3', index: 3}]},
  {line: 2, comparison: {index: 3, value: '5 > 7', result: false}, nodes:[3, 4]},
  {line: 1, comparison: {index: 4, value: '4 < 5', result: true}, variables: [{name: 'i', value: '4', index: 4}]},
  {line: 2, comparison: {index: 4, value: '7 > 9', result: false}, nodes:[4, 5]},
  {line: 7, comparison: {index: 0, value: 'swaped == true', result: true}},
  {line: 1, comparison: {index: 0, value: '0 < 5', result: true}, variables: [{name: 'i', value: '0', index: 0}]},
  {line: 2, comparison: {index: 0, value: '2 > 4', result: false}, nodes:[0, 1]},
  {line: 1, comparison: {index: 1, value: '1 < 5', result: true}, variables: [{name: 'i', value: '1', index: 1}]},
  {line: 2, comparison: {index: 1, value: '4 > 1', result: true}, nodes:[1, 2]},
  {line: 3, variables: [{name: 'temp', value: '4', index: 2, sticky: true}], nodes:[1]},
  {line: 4, set:{1:'1'}, nodes:[1]},
  {line: 5, set:{2:'4'}, nodes:[2], variables: [{name: '', index: 2}]},
  {line: 6, variables: [{name: 'swapped', index: 1, value: 'true'}]},
  {line: 1, comparison: {index: 2, value: '2 < 5', result: true}, variables: [{name: 'i', value: '2', index: 2}]},
  {line: 2, comparison: {index: 2, value: '4 > 5', result: false}, nodes:[2, 3]},
  {line: 1, comparison: {index: 3, value: '3 < 5', result: true}, variables: [{name: 'i', value: '3', index: 3}]},
  {line: 2, comparison: {index: 3, value: '5 > 7', result: false}, nodes:[3, 4]},
  {line: 1, comparison: {index: 4, value: '4 < 5', result: true}, variables: [{name: 'i', value: '4', index: 4}]},
  {line: 2, comparison: {index: 4, value: '7 > 9', result: false}, nodes:[4, 5]},
  {line: 7, comparison: {index: 0, value: 'swaped == true', result: true}},
  {line: 1, comparison: {index: 0, value: '0 < 5', result: true}, variables: [{name: 'i', value: '0', index: 0}]},
  {line: 2, comparison: {index: 0, value: '2 > 1', result: true}, nodes:[0, 1]},
  {line: 3, variables: [{name: 'temp', value: '2', index: 1, sticky: true}], nodes:[0]},
  {line: 4, set:{0:'1'}, nodes:[0]},
  {line: 5, set:{1:'2'}, nodes:[1], variables: [{name: '', index: 1}]},
  {line: 6, variables: [{name: 'swapped', index: 0, value: 'true'}]},
  {line: 1, comparison: {index: 1, value: '1 < 5', result: true}, variables: [{name: 'i', value: '1', index: 1}]},
  {line: 2, comparison: {index: 1, value: '2 > 4', result: false}, nodes:[1, 2]},
  {line: 1, comparison: {index: 2, value: '2 < 5', result: true}, variables: [{name: 'i', value: '2', index: 2}]},
  {line: 2, comparison: {index: 2, value: '4 > 5', result: false}, nodes:[2, 3]},
  {line: 1, comparison: {index: 3, value: '3 < 5', result: true}, variables: [{name: 'i', value: '3', index: 3}]},
  {line: 2, comparison: {index: 3, value: '5 > 7', result: false}, nodes:[3, 4]},
  {line: 1, comparison: {index: 4, value: '4 < 5', result: true}, variables: [{name: 'i', value: '4', index: 4}]},
  {line: 2, comparison: {index: 4, value: '7 > 9', result: false}, nodes:[4, 5]},
  {line: 7, comparison: {index: 0, value: 'swaped == true', result: true}},
  {line: 1, comparison: {index: 0, value: '0 < 5', result: true}, variables: [{name: 'i', value: '0', index: 0}]},
  {line: 2, comparison: {index: 0, value: '1 > 2', result: false}, nodes:[0, 1]},
  {line: 1, comparison: {index: 1, value: '1 < 5', result: true}, variables: [{name: 'i', value: '1', index: 1}]},
  {line: 2, comparison: {index: 1, value: '2 > 4', result: false}, nodes:[1, 2]},
  {line: 1, comparison: {index: 2, value: '2 < 5', result: true}, variables: [{name: 'i', value: '2', index: 2}]},
  {line: 2, comparison: {index: 2, value: '4 > 5', result: false}, nodes:[2, 3]},
  {line: 1, comparison: {index: 3, value: '3 < 5', result: true}, variables: [{name: 'i', value: '3', index: 3}]},
  {line: 2, comparison: {index: 3, value: '5 > 7', result: false}, nodes:[3, 4]},
  {line: 1, comparison: {index: 4, value: '4 < 5', result: true}, variables: [{name: 'i', value: '4', index: 4}]},
  {line: 2, comparison: {index: 4, value: '7 > 9', result: false}, nodes:[4, 5]},
  {line: 7, comparison: {index: 0, value: 'swaped == true', result: false}},
  {line: 9}
];

instructions.bubbleSortInit = {
  set:{0: '7', 1: '4', 2: '5', 3: '2', 4: '9', 5: '1'}
};

instructions.insertionSort = [
  {line: 7},
  {line: 0, variables: [{name: 'length', value: '6', index:5}]},
  {line: 1, variables: [{name: 'i', value: '1', index:1}], comparison: {index: 1, value: '1 < 6', result: true}},
  {line: 2, variables: [{name: 'temp', value: '4', index:1, sticky: true}], node: [1]},
  {line: 3, variables: [{name: 'j', value: '0', index:0}]},
  {line: 4, comparison: [{index: 1, value: '7 > 4', result: true}], nodes: [0,1]},
  {line: 5, set:{1: '7'}, nodes:[1]},
  {line: 4, comparison: {index: 0, value: '-1 >= 0', result: false}},
  {line: 6, set:{0:'4'}, nodes:[0], variables: [{index:1, name: '',}]},
  {line: 1, variables: [{name: 'i', value: '2', index:2}], comparison: {index: 2, value: '2 < 6', result: true}},
  {line: 2, variables: [{name: 'temp', value: '5', index:2, sticky: true}], node: [2]},
  {line: 3, variables: [{name: 'j', value: '1', index:1}]},
  {line: 4, comparison: [{index: 2, value: '7 > 5', result: true}], nodes: [1,2]},
  {line: 5, set:{2: '7'}, nodes:[2]},
  {line: 4, comparison: [{index: 0, value: '4 > 5', result: false}]},
  {line: 6, set:{1:'5'}, nodes:[1], variables: [{index:2, name: '',}]},
  {line: 1, variables: [{name: 'i', value: '3', index:3}], comparison: {index: 3, value: '3 < 6', result: true}},
  {line: 2, variables: [{name: 'temp', value: '2', index:3, sticky: true}], node: [3]},
  {line: 3, variables: [{name: 'j', value: '2', index:2}]},
  {line: 4, comparison: [{index: 3, value: '7 > 2', result: true}], nodes: [2,3]},
  {line: 5, set:{3: '7'}, nodes:[3]},
  {line: 4, comparison: [{index: 1, value: '5 > 2', result: true}]},
  {line: 5, set:{2: '5'}, nodes:[2]},
  {line: 4, comparison: [{index: 0, value: '4 > 2', result: true}]},
  {line: 5, set:{1: '4'}, nodes:[1]},
  {line: 4, comparison: [{index: 0, value: '-1 >= 0', result: false}]},
  {line: 6, set:{0: '2'}, nodes:[0], variables: [{index:3, name: '',}]},
  {line: 1, variables: [{name: 'i', value: '4', index:4}], comparison: {index: 4, value: '4 < 6', result: true}},
  {line: 2, variables: [{name: 'temp', value: '9', index:4, sticky: true}], node: [4]},
  {line: 3, variables: [{name: 'j', value: '3', index:3}]},
  {line: 4, comparison: [{index: 4, value: '7 > 9', result: false}], nodes: [3,4]},
  {line: 6, set:{4: '9'}, nodes:[4], variables: [{index:4, name: '',}]},
  {line: 1, variables: [{name: 'i', value: '5', index:5}], comparison: {index: 5, value: '5 < 6', result: true}},
  {line: 2, variables: [{name: 'temp', value: '1', index:5, sticky: true}], node: [5]},
  {line: 3, variables: [{name: 'j', value: '4', index:4}]},
  {line: 4, comparison: [{index: 4, value: '9 > 1', result: true}], nodes: [4,5]},
  {line: 5, set:{5: '9'}, nodes:[5]},
  {line: 4, comparison: [{index: 3, value: '7 > 1', result: true}]},
  {line: 5, set:{4: '7'}, nodes:[4]},
  {line: 4, comparison: [{index: 2, value: '5 > 1', result: true}]},
  {line: 5, set:{3: '5'}, nodes:[3]},
  {line: 4, comparison: [{index: 1, value: '4 > 1', result: true}]},
  {line: 5, set:{2: '4'}, nodes:[2]},
  {line: 4, comparison: [{index: 0, value: '2 > 1', result: true}]},
  {line: 5, set:{1: '2'}, nodes:[1]},
  {line: 4, comparison: [{index: 0, value: '-1 >= 0', result: false}]},
  {line: 6, set:{0: '1'}, nodes:[0], variables: [{index:5, name: '',}]},
  {line: 1, variables: [{name: 'i', value: '6', index:6}], comparison: {index: 5, value: '6 < 6', result: false}},
  {line: 8}
];

instructions.insertionSortInit = {
  set:{0: '7', 1: '4', 2: '5', 3: '2', 4: '9', 5: '1'}
};

// instructions.quickSort = [
//   {line: 12},
//   {line: 11},
//   {line: 7, variables:[{name: 'start', index: 0, value: 0}, {name: 'end', index: 5, value: 5}], comparison: [{index: 0, value: '0 < 5', result: true}]},
//   {line: 8},
//   {line: 0, variables:[{name: 'value', index: 0, value: '7'}], nodes: [0]},
//   {line: 1, set:{0: '1', 5: '7'}, nodes: [0, 5], variables:[{name: 'value', index: 5, value: '7', sticky: true}]},
//   {line: 2, variables:[{name: 'i', value: '0', index: 0, sticky: true}], comparison: {index: 0, value: '0 < 5', result: true}},
//   {line: 3, comparison: {index: 0, value: '1 < 7', result: true}},
//   {line: 4, nodes: [0], variables:[{name: 'i/start', value: '0', index: 0}]},
//   {line: 2, variables:[{name: 'i', value: '1', index: 1, sticky: true}], comparison: {index: 1, value: '1 < 5', result: true}},
//   {line: 3, comparison: {index: 1, value: '4 < 7', result: true}},
//   {line: 4, nodes: [1], variables:[{name: 'i/start', value: '1', index: 1}]},
//   {line: 2, variables:[{name: 'i', value: '2', index: 2, sticky: true}], comparison: {index: 2, value: '2 < 5', result: true}},
//   {line: 3, comparison: {index: 2, value: '5 < 7', result: true}},
//   {line: 4, nodes: [2], variables:[{name: 'i/start', value: '2', index: 2}]},
//   {line: 2, variables:[{name: 'i', value: '3', index: 3, sticky: true}], comparison: {index: 3, value: '3 < 5', result: true}},
//   {line: 3, comparison: {index: 3, value: '2 < 7', result: true}},
//   {line: 4, nodes: [3], variables:[{name: 'i/start', value: '3', index: 3}]},
//   {line: 2, variables:[{name: 'i', value: '4', index: 4, sticky: true}], comparison: {index: 4, value: '4 < 5', result: true}},
//   {line: 3, comparison: {index: 4, value: '9 < 7', result: false}, variables:[{index: 4}]},
//   {line: 2, variables:[{name: 'i', value: '5', index: 5}], comparison: {index: 5, value: '5 < 5', result: false}},
//   {line: 5, nodes: [4, 5], set:{4: '7', 5: '9'}, variables:[{name: 'start', index: 4, value: '4', sticky: true}, {name: 'end', index:5, value:'5'}]},
//   {line: 6},
//   {line: 9, variables:[{name: 'start', index: 0, value: '0'}, {name: 'pivot', index: 4, value: '4'}]},
//   {line: 13}
// ];
// 
// instructions.quickSortInit = {
//   set:{0: '7', 1: '4', 2: '5', 3: '2', 4: '9', 5: '1'}
// };