const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

const shortWords = words.filter(word => {return word.length < 6;
});
console.log(shortWords);
