const input = [
  {
    date:"2020-06-18",
    amount: 200,
  },
  {
    date: "2019-05-21",
    amount: 100,
  },
  {
    date: "2020-04-20",
    amount: 250,
  },
  {
    date: "2020-05-01",
    amount: 500,
  },
  {
    date: "2019-03-05",
    amount: 600,
  },
];

const ans = {};

for( let i =0 ; i< input.length; i++) 
{
  const amount = input[i].amount;
  const year =  input[i].date.split("-")[0];
  const month =  input[i].date.split("-")[1];

  if (ans[year]) 
  {
    ans[year].total += input[i].amount;
  } 
  else 
  {
    ans[year] = {};
    ans[year].total = input[i].amount;
  }

  if (ans[year].months) 
  {
    ans[year].months[month] = amount;
  } 
  else 
  {
    ans[year].months = {};
    ans[year].months[month] = amount;
  }
}

console.log(ans);
