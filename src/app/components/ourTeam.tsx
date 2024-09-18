const people = [
  {
    name: "Aditya Sharma",
    role: "Director",
    imageUrl: "./profile/F2024/adi.jpg",
  },
  // {
  //   name: "Hassan Naboulsi",
  //   role: "Director",
  //   imageUrl: "./profile/F2024/hassan.jpeg",
  // },
  {
    name: "Joshiro Lawrence",
    role: "Tech Committee Lead",
    imageUrl: "./profile/F2024/joshi.jpeg",
  },
  {
    name: "Ryan Chu",
    role: "Logistics Committee Lead",
    imageUrl: "./profile/F2024/ryan.jpg",
  },
  {
    name: "Victor Pham",
    role: "Marketing and Outreach Committee Lead",
    imageUrl: "./profile/F2024/victor.jpg",
  },
  // {
  //   name: "Ming Zhe Chua",
  //   role: "Finance Committee Lead",
  //   imageUrl: "./profile/ming-zhe.jpg",
  // },
  {
    name: "Enkhbold Ganbold",
    role: "Tech Committee",
    imageUrl: "./profile/F2024/enkhbold.jpg",
  },
  {
    name: "Manuel Moya",
    role: "Tech Committee",
    imageUrl: "./profile/F2024/manuel.jpg",
  },
  {
    name: "Haoyun (Snow) Luo",
    role: "Logistics Committee",
    imageUrl: "./profile/F2024/snow.jpg",
  },
  {
    name: "Neha Gopal",
    role: "Logistics Committee",
    imageUrl: "./profile/F2024/neha.jpg",
  },
  {
    name: "Nancy Ta",
    role: "Logistics Committee",
    imageUrl: "./profile/F2024/nancy.png",
  },
  {
    name: "Michelle D'Souza",
    role: "Marketing and Outreach Committee",
    imageUrl: "./profile/F2024/michelle.jpg",
  },
  {
    name: "Nadine Mai",
    role: "Marketing and Outreach Committee",
    imageUrl: "./profile/F2024/nadine.jpg",
  },
  // More people...
];

export default function Example() {
  return (
    <div id="team" className="bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            Meet the people who make De Anza Hacks possible.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-32 w-32 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-200">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-green-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
