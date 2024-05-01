const START_SCREEN = "dashboard";
const plantData = [
    {name:"Succulent",
    inDashboard: true,
    description: " Fragrant annual herb, grows up to 20-50 cm tall. Adds distinct flavor to culinary dishes worldwide.",
    warnings: {
      hot: 90,
      cold: '40°F',
      wind: '10 mph',
      rain: '90%'
    },
    sunlight:["6 hours of bright, indirect sunlight"],
    water:["Water when soil is completely dry"],
    image:["https://s3-alpha-sig.figma.com/img/6159/d73e/98e398c609e1669ec2e0e6169eeaf6fc?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J~7K8IDPLZrBmJdjdfHFILmADrk6vpf-AllulISW5oY~XcCmvwqvXhasU8TmqmF8iOe6aAZtNfBnuks-KhbZeCc24katG3R4tZkq~hrUaYAQHZdaEG8zbN4XcycyiCm7DwxC~Pmr9PPu4tgHGrRJM~JJ-ZSDIuc9N8C-NUoZ69zuEnCYShbjbyEx1QJcEF9mwappzyvFF7YtlDSVDJnbc4c2o5TiopQQGm6gYZ0yDcaeT-Y9wXsq5i--3ueOb0kv6TvPjkA-OpkO6OyFLhhwkoP1N9yBBWLh5~V8nq5SYdF7GmJjU~3bgzsrsKE9ZrurFreaORVJowTrFqPYCTleWg__"]},

    {name:"Lantana",
    inDashboard: true,
    description: " Fragrant annual herb, grows up to 20-50 cm tall. Adds distinct flavor to culinary dishes worldwide.",
    warnings: {
      hot: 80,
      cold: 40,
      wind: '10 mph',
      rain: '90%'
    },
    sunlight:["6-8 hours of direct sunlight"],
    water:["Water sparingly once a week"],
    image:["https://s3-alpha-sig.figma.com/img/bbe6/f09b/2bae8c5e14b1b0e0fbe723be497d6327?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lHagdCInCQJ7GdpQr3vDm~3jIo97C7b5pabT37GTWZ~HBPbXKbXyMuiZFSfyb3nniDscn8k-Hwc2MF7bCoHCKHfhkR2Hpo6uy3TPE2hbmygMTJPK8s55ptsksprwLaKS88Cg4qiAqtZetMa53eoqQbJgwMai7bETCxOaG3N5XI1Fg0mCAZkOTPx3vmJKM630wI6t7gvLp-egqs6Gr-4IpNEjZ9dgCnPOykTe1nSucEsZt33Zf~238ucn~1u0YaByzeVIhqu701KuMxycdHi4IECrFzTPTgN4UtqSb32rNRxF7fHOs5Y9C3wNe1fr0xYz0IIqEcNcYfDwbKQSZnp9Ug__"]
    },

    {name:"Dwarf Yaupon",
    inDashboard: true,
    description: " Fragrant annual herb, grows up to 20-50 cm tall. Adds distinct flavor to culinary dishes worldwide.",
    warnings: {
      hot: 95,
      cold: 40,
      wind: '10 mph',
      rain: '90%'
    },
    sunlight:["6-8 hours of bright sunlight"],
    water:["Water once a week, increased in dry conditions"],
    image:["https://s3-alpha-sig.figma.com/img/c21e/5be1/15556fd6e45355cd88beb2ecb04be8f8?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cwhcHKCpaj4mjUxfW-nqz8TSJjV3wDwEyyjLIU9-87mcKBM6jgxsJOdPradFgNpmqGc0eh15bNVEP4q-ZFqvITyoSfYiuScqz3kGssEt-WwjnmK8M34sGSLY-wyDzvNFtV6aLqyhABa7fao9R1RUgpqJEVzH4OE3Y3RX7ivZjAnwtnuOjeuixGM3e8tmdkSvBdSqu1v0QkLsTWihRq2IYVlMt4bm8m~zgNwe5xemntKDJUdeuxtcSDI0cprL8d5BZPW3WSyvJZYt4CRvvtauJStC3ONRAmsZMpDcE4YmoODaoVG7f0qVHuHp1Cu3h2VWdJ32EggwPuISuHlsT4Pb8A__"]},

    {name:"B. Eyed Susan",
    inDashboard: true,
    description: " Fragrant annual herb, grows up to 20-50 cm tall. Adds distinct flavor to culinary dishes worldwide.",
    warnings: {
      hot: 80,
      cold: '40°F',
      wind: '10 mph',
      rain: '90%'
    },
    sunlight:["6 hours of bright sunlight"],
    water:["Water when soil is completely dry"],
    image:["https://s3-alpha-sig.figma.com/img/acec/f085/292f06c1453dbd750aae4ce7dd676b53?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fFBn8e49PhtfuMoe9I1MqqXMGHaJ7PgppgqZF6~lWnAP3VQLNgcwcejWaMeJSOKcLP-1IcAWiOq105XHdihO3vqO7nbgE9fdyysD44RyaJpc4KNSD-ZRj7HpI4vhHM95cCLyN17kMt3Tlj~UTsRNMpPs9Wvbqv3j6sM~EDSVXUl5qKuwVL5Y42iv0kYF1JY-dipqEpc6kD3wHau3bkhhyhDzy2IycFhe41U7QWLJiI9OPSMHUseu~7erPxE6TWp6YJyA1WsldSnoEAViYgopO6f0YwgxQdlR79zh-1KQ~sTOCg0KVVXfNU1oUAV5AyQouxIJjDRFKW7589h317WKGw__"]},

    {name:"Succulent",
    inDashboard: true,
    description: " Fragrant annual herb, grows up to 20-50 cm tall. Adds distinct flavor to culinary dishes worldwide.",
    warnings: {
      hot: 95,
      cold: '40°F',
      wind: '10 mph',
      rain: '90%'
    },
    sunlight:["6 hours of bright, indirect sunlight"],
    water:["Water when soil is completely dry"],
    image:["https://s3-alpha-sig.figma.com/img/6159/d73e/98e398c609e1669ec2e0e6169eeaf6fc?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J~7K8IDPLZrBmJdjdfHFILmADrk6vpf-AllulISW5oY~XcCmvwqvXhasU8TmqmF8iOe6aAZtNfBnuks-KhbZeCc24katG3R4tZkq~hrUaYAQHZdaEG8zbN4XcycyiCm7DwxC~Pmr9PPu4tgHGrRJM~JJ-ZSDIuc9N8C-NUoZ69zuEnCYShbjbyEx1QJcEF9mwappzyvFF7YtlDSVDJnbc4c2o5TiopQQGm6gYZ0yDcaeT-Y9wXsq5i--3ueOb0kv6TvPjkA-OpkO6OyFLhhwkoP1N9yBBWLh5~V8nq5SYdF7GmJjU~3bgzsrsKE9ZrurFreaORVJowTrFqPYCTleWg__"]},

  ]



  const plantDatabase = [
    {name:"Succulent",
    inDashboard: true,
    warnings: {
      hot: 100,
      cold: '40°F',
      wind: '10 mph',
      rain: '90%'
    },
    sunlight:["6 hours of bright, indirect sunlight"],
    water:["Water when soil is completely dry"],
    description: " Fragrant annual herb, grows up to 20-50 cm tall. Adds distinct flavor to culinary dishes worldwide.",
    image:["https://s3-alpha-sig.figma.com/img/6159/d73e/98e398c609e1669ec2e0e6169eeaf6fc?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J~7K8IDPLZrBmJdjdfHFILmADrk6vpf-AllulISW5oY~XcCmvwqvXhasU8TmqmF8iOe6aAZtNfBnuks-KhbZeCc24katG3R4tZkq~hrUaYAQHZdaEG8zbN4XcycyiCm7DwxC~Pmr9PPu4tgHGrRJM~JJ-ZSDIuc9N8C-NUoZ69zuEnCYShbjbyEx1QJcEF9mwappzyvFF7YtlDSVDJnbc4c2o5TiopQQGm6gYZ0yDcaeT-Y9wXsq5i--3ueOb0kv6TvPjkA-OpkO6OyFLhhwkoP1N9yBBWLh5~V8nq5SYdF7GmJjU~3bgzsrsKE9ZrurFreaORVJowTrFqPYCTleWg__"]},

    {name:"Lantana",
    inDashboard: true,
    warnings: {
      hot: 80,
      cold: '40°F',
      wind: '10 mph',
      rain: '90%'
    },
    sunlight:["6 hours of bright, indirect sunlight"],
    water:["Water when soil is completely dry"],
    description: " Fragrant annual herb, grows up to 20-50 cm tall. Adds distinct flavor to culinary dishes worldwide.",
    image:["https://s3-alpha-sig.figma.com/img/bafd/1e92/5db3425aeae54081330fadafc19cbfdb?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GS1fofyEhe93aV1AsR0~GEkSKvWGXRgiz~m5uMftkg4Fc2fGyeeVgYZ8rwEmc7v5e0KG1l8xEyYihKSI~8egv1d4NK9yQ3MnwJrHky3nOIM4HHlca3jmkmVMCSSGvagZu-4slqiN25bXaSjhJ8HG0xtRTrUS8i~-H0i~s~uVxip-u1SE6BQWclrYLnZam2R3wla8dpTHn0Y72317Y3zpNPFjSeBd6~4EFpBiuQvQL1IH7BNFSefjgjNy5pVozY8agjOnNbPeY3LGQWZKCZG2ggBfOpBn2GbwuKwuItWUaTw3yhNIEJUnrivsyzAsTX6XV-gv30BmH6W3v-dqTqKsZA__"]
    },

    {name:"Dwarf Yaupon",
    inDashboard: true,
    warnings: {
      hot: 95,
      cold: '40°F',
      wind: '10 mph',
      rain: '90%'
    },
    description: " Fragrant annual herb, grows up to 20-50 cm tall. Adds distinct flavor to culinary dishes worldwide.",
    sunlight:["6-8 hours of bright sunlight"],
    water:["Water once a week, increased in dry conditions"],
    image:["https://s3-alpha-sig.figma.com/img/c21e/5be1/15556fd6e45355cd88beb2ecb04be8f8?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cwhcHKCpaj4mjUxfW-nqz8TSJjV3wDwEyyjLIU9-87mcKBM6jgxsJOdPradFgNpmqGc0eh15bNVEP4q-ZFqvITyoSfYiuScqz3kGssEt-WwjnmK8M34sGSLY-wyDzvNFtV6aLqyhABa7fao9R1RUgpqJEVzH4OE3Y3RX7ivZjAnwtnuOjeuixGM3e8tmdkSvBdSqu1v0QkLsTWihRq2IYVlMt4bm8m~zgNwe5xemntKDJUdeuxtcSDI0cprL8d5BZPW3WSyvJZYt4CRvvtauJStC3ONRAmsZMpDcE4YmoODaoVG7f0qVHuHp1Cu3h2VWdJ32EggwPuISuHlsT4Pb8A__"]},

    {name:"B. Eyed Susan",
    inDashboard: true,
    warnings: {
      hot: 80,
      cold: '40°F',
      wind: '10 mph',
      rain: '90%'
    },
    sunlight:["6 hours of bright, indirect sunlight"],
    water:["Water when soil is completely dry"],
    description: " Fragrant annual herb, grows up to 20-50 cm tall. Adds distinct flavor to culinary dishes worldwide.",
    image:["https://s3-alpha-sig.figma.com/img/acec/f085/292f06c1453dbd750aae4ce7dd676b53?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fFBn8e49PhtfuMoe9I1MqqXMGHaJ7PgppgqZF6~lWnAP3VQLNgcwcejWaMeJSOKcLP-1IcAWiOq105XHdihO3vqO7nbgE9fdyysD44RyaJpc4KNSD-ZRj7HpI4vhHM95cCLyN17kMt3Tlj~UTsRNMpPs9Wvbqv3j6sM~EDSVXUl5qKuwVL5Y42iv0kYF1JY-dipqEpc6kD3wHau3bkhhyhDzy2IycFhe41U7QWLJiI9OPSMHUseu~7erPxE6TWp6YJyA1WsldSnoEAViYgopO6f0YwgxQdlR79zh-1KQ~sTOCg0KVVXfNU1oUAV5AyQouxIJjDRFKW7589h317WKGw__"]},

    {name: "Cilantro",
    inDashboard: false,
    warnings: {
      hot: 80,
      cold: '40°F',
      wind: '10 mph',
      rain: '90%'
    },
      sunlight:["6 hours of bright, indirect sunlight"],
      water:["Water when soil is completely dry"],
      description: " Fragrant annual herb, grows up to 20-50 cm tall. Adds distinct flavor to culinary dishes worldwide.",
     image:["https://s3-alpha-sig.figma.com/img/9c3c/4a7a/2a8de1cf260e9ebccc8f129f7ae356d2?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lxtKkykbTk74okZyA2XnEo7MazNV7w6dAS8cjZ1ctt16by6vavOnc5BV0Bj4APlU1EB1OI3g6od7Xto-M3r5ObpKArDryHIAIvaB9cfxCPBP4RNPq3GoaxC8lsJeztALlG36DKahwj08Xl0uf~PtV2qSlWNT00pGujZibGFIMrHQMdySlcJtYlkrimWL06s6zQOQF9o~7skj1pqLfHRQX2ATqmdFy4IQMsu1-~VGjk~qU3p00KSyKbshSlHu8938wZA1YeFaPznQJ2twWH~7una2nVHIHzmavU0Ewb8ahGKHjw0CWQo0D1CrFXKL~XJIfN3-7Fkqacb02ZcQXNvB4Q__"]
    }
  ];
const cilantroForum = {
	location: "Arlington", 
	chat: [
		{name: "Misty", message: "Great for beginners growing here in Arlington!"},
		{name: "Bob", message: "I’ve been growing every year and I love it!"},

	]
}

const cilantroPlantData = {
	name: "cilantro", 
	description: " Fragrant annual herb, grows up to 20-50 cm tall. Adds distinct flavor to culinary dishes worldwide.",
	requirements:{
		water: "Every 2-3 days",
		sun: "Partial shade to full sun"
	}
}
const weatherOutlook = [
  {time: '3PM',
   temperature: 60,
   precipitation: "20%",
   Wind: "8 mph NW",
   Humidity: "5%",
   image: "https://s3-alpha-sig.figma.com/img/9d0c/9998/ac3501dad3f660fa3a50d296eaeb9870?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TAb7HmXWYOtSM1eeJj-x8SbzVIfPg9Vh06RK4BRANOadTMVNzXreoXM7tfFVteoDz9VvpIuSq2rFrJ31FEiCtMrmKQE2xzVToqqc8t1FI8VvcoCNFnZAw6~UqjnWAQcRG9IGmgG~0~gQgre8k55LfTEvXoHg1c5xePrTzOXHxdXK5L8pt1NMA~JVWzJaiDVyxjaVBoWFEAcLv1qc-zNCscmiKvWvzB6Wiz0RuzoxKIoeSPKBtCve2QIqXtkfObhhRYHv2zAX9S2qJ91fsI7y2BxB4VoiNFhQiP1XEttkJGZ3hkNG0mC4yZyGSFC4baMWFEr13ULtbDpGpXdj-ZPqEQ__"},

  {time: '4PM',
   temperature: 92,
   precipitation: "20%",
   Wind: "8 mph NW",
   Humidity: "5%",
   image: "https://s3-alpha-sig.figma.com/img/125f/bc64/0e27d3749361abde9c5b2cd44516ac93?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qPTjP5Q07fJDYZidknwJY6d1ZKgeIaO2f~YrMnc65TwVnSugH-ndqraoa1~N7jYW9K7Xz602xEqLnIhT8sfm266qPDZXpcVziuco~VZZwxajNrHbm9U0DJO9hA0h4N21vvLW2qLmdp3n7kg5UoRyMR3rJQh9cQEShUbSQpBH-E8MvYQ3ysi2ar7vaZ472TAggjaKKUzljq2KLK0e9OpETobXf-GcLnosQVGWRKGMUs~jIATAWOc8b3867vtm8Fq237e4VXtwqEy7bo1BknW4FdIC-95MZiT~4T461KlChJWhGWFaw-zCTxkZ3XhNrGXlO13jO46AtdJmPA6t9bPClA__"},

   {time: '5PM',
   temperature: 93,
   precipitation: "20%",
   Wind: "8 mph NW",
   Humidity: "5%",
   image: "https://s3-alpha-sig.figma.com/img/125f/bc64/0e27d3749361abde9c5b2cd44516ac93?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qPTjP5Q07fJDYZidknwJY6d1ZKgeIaO2f~YrMnc65TwVnSugH-ndqraoa1~N7jYW9K7Xz602xEqLnIhT8sfm266qPDZXpcVziuco~VZZwxajNrHbm9U0DJO9hA0h4N21vvLW2qLmdp3n7kg5UoRyMR3rJQh9cQEShUbSQpBH-E8MvYQ3ysi2ar7vaZ472TAggjaKKUzljq2KLK0e9OpETobXf-GcLnosQVGWRKGMUs~jIATAWOc8b3867vtm8Fq237e4VXtwqEy7bo1BknW4FdIC-95MZiT~4T461KlChJWhGWFaw-zCTxkZ3XhNrGXlO13jO46AtdJmPA6t9bPClA__"},

   {time: '6PM',
   temperature: 93,
   precipitation: "20%",
   Wind: "8 mph NW",
   Humidity: "5%",
   image: "https://s3-alpha-sig.figma.com/img/9d0c/9998/ac3501dad3f660fa3a50d296eaeb9870?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TAb7HmXWYOtSM1eeJj-x8SbzVIfPg9Vh06RK4BRANOadTMVNzXreoXM7tfFVteoDz9VvpIuSq2rFrJ31FEiCtMrmKQE2xzVToqqc8t1FI8VvcoCNFnZAw6~UqjnWAQcRG9IGmgG~0~gQgre8k55LfTEvXoHg1c5xePrTzOXHxdXK5L8pt1NMA~JVWzJaiDVyxjaVBoWFEAcLv1qc-zNCscmiKvWvzB6Wiz0RuzoxKIoeSPKBtCve2QIqXtkfObhhRYHv2zAX9S2qJ91fsI7y2BxB4VoiNFhQiP1XEttkJGZ3hkNG0mC4yZyGSFC4baMWFEr13ULtbDpGpXdj-ZPqEQ__"},

   {time: '7PM',
   temperature: 93,
   precipitation: "20%",
   Wind: "8 mph NW",
   Humidity: "5%",
   image: "https://s3-alpha-sig.figma.com/img/9d0c/9998/ac3501dad3f660fa3a50d296eaeb9870?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TAb7HmXWYOtSM1eeJj-x8SbzVIfPg9Vh06RK4BRANOadTMVNzXreoXM7tfFVteoDz9VvpIuSq2rFrJ31FEiCtMrmKQE2xzVToqqc8t1FI8VvcoCNFnZAw6~UqjnWAQcRG9IGmgG~0~gQgre8k55LfTEvXoHg1c5xePrTzOXHxdXK5L8pt1NMA~JVWzJaiDVyxjaVBoWFEAcLv1qc-zNCscmiKvWvzB6Wiz0RuzoxKIoeSPKBtCve2QIqXtkfObhhRYHv2zAX9S2qJ91fsI7y2BxB4VoiNFhQiP1XEttkJGZ3hkNG0mC4yZyGSFC4baMWFEr13ULtbDpGpXdj-ZPqEQ__"}
   
]
export {cilantroPlantData, cilantroForum, plantData,plantDatabase,weatherOutlook, START_SCREEN};