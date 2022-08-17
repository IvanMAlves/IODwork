var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

library.forEach((item,index) => {
    let book = `${library[index].title} by ${library[index].author}`
    if(library[index].readingStatus){
        console.log(`Already read ${book}`);
    }else{
        console.log(`you still need to read ${book}`);
    }
})
