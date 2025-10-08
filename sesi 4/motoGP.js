var motoGP = [
  {
    circuit: 'Losail',
    location: 'Qatar',
    winner: { 
        firstName: 'Andrea', 
        lastName: 'Dovizioso', 
        country: 'Italy' 
    }
  },
  {
    circuit: 'Autodromo',
    location: 'Argentine',
    winner: { 
        firstName: 'Cal', 
        lastName: 'Crutchlow', 
        country: 'UK' 
    }
  },
  {
    circuit: 'De Jerez',
    location: 'Spain',
    winner: { 
        firstName: 'Valentino', 
        lastName: 'Rossi', 
        country: 'Italy' 
    }
  },
  {
    circuit: 'Mugello',
    location: 'Italy',
    winner: { 
        firstName: 'Andrea', 
        lastName: 'Dovizioso', 
        country: 'Italy' 
    }
  }
];

let groupedByCountry = {};

for (let i = 0; i < motoGP.length; i++) {
  let country = motoGP[i].winner.country;

  if (!groupedByCountry[country]) {
    groupedByCountry[country] = {
      winningCircuits: [],
      totalWin: 0
    };
  }

  groupedByCountry[country].winningCircuits.push({
    name: `${motoGP[i].winner.firstName} ${motoGP[i].winner.lastName}`,
    winLocation: `${motoGP[i].circuit}, ${motoGP[i].location}`
  });

  groupedByCountry[country].totalWin++;
}

console.dir(groupedByCountry,{depth: null, color: true});
