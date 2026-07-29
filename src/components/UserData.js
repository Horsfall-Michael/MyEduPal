const DUMMY_PROFILE = {
  fullname: "Okolo Chichi",
  username: "Unusual Fav",
  level: 400,
  email:"favour443e3@gmail.com",
  bio: "Biology Education student UNN",
  department: "Biology Education",
  university: "University of Nigeria, Nsukka",
  school_abbreviation: "UNN",
};

const DUMMY_STATS = {
  total_notes_saved: 12,
  notes_saved_this_week: 3,
  groups_joined: 4,
  total_hours_done: 28,
  weekly_hours: 8,
  streak: 5,
  daily_hours_goal: 4,
};

const DUMMY_ACTIVITIES = [
  {
    id: 1,
    type: "note_saved",
    title: "Saved React Fundamentals Notes",
    created_at: new Date().toISOString(),
  },
  {
    id: 2,
    type: "group_joined",
    title: "Joined CSC 301 Study Group",
    created_at: new Date().toISOString(),
  },
];

const DUMMY_MATCHES = [
  {
    id: 1,
    name: "Sarah Johnson",
    school: "UNILAG",
    course: "Computer Science",
    image: "https://i.pravatar.cc/100?img=5",
  },
  {
    id: 2,
    name: "David Brown",
    school: "UNILAG",
    course: "Software Engineering",
    image: "https://i.pravatar.cc/100?img=8",
  },
];

const DUMMY_WEEKLY_HOURS = [
  { iso_day: 1, day_name: "Mon", total_hours: 2 },
  { iso_day: 2, day_name: "Tue", total_hours: 4 },
  { iso_day: 3, day_name: "Wed", total_hours: 1 },
  { iso_day: 4, day_name: "Thu", total_hours: 3 },
  { iso_day: 5, day_name: "Fri", total_hours: 5 },
  { iso_day: 6, day_name: "Sat", total_hours: 2 },
  { iso_day: 7, day_name: "Sun", total_hours: 4 },
];
 export {DUMMY_ACTIVITIES, DUMMY_MATCHES, DUMMY_PROFILE, DUMMY_STATS, DUMMY_WEEKLY_HOURS}