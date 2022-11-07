const initialData = {
    cards: {
      'card-1': { id: 'card-1', content: 'Flight info: UA 787 lv 9AM' },
      'card-2': { id: 'card-2', content: 'get uber to Catipoato' },
      'card-3': { id: 'card-3', content: 'double check museum times' },
      'card-4': { id: 'card-4', content: 'dinner with Geno' }
    },
    stacks: {
      'stack-1': {
        id: 'stack-1',
        title: 'Travel day',
        cardIds: ['card-1', 'card-2', 'card-3', 'card-4']
      },
      'stack-2': {
        id: 'stack-2',
        title: 'Museum: Blue House',
        cardIds: []
      },
      'stack-3': {
        id: 'stack-3',
        title: 'Zoo?',
        cardIds: []
      }
    },
    // Facilitate reordering of the stacks
    stackOrder: ['stack-1', 'stack-2', 'stack-3']
  }
  
  export default initialData