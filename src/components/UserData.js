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
      type: "download",
      description: "Downloaded Physics 201 Past Questions",
      timestamp: "2026-03-20T14:30:00Z",
    },
    {
      id: 2,
      type: "group",
      description: "Joined the 'Math 201 Study Group'",
      timestamp: "2026-03-20T10:15:00Z",
    },
    {
      id: 3,
      type: "shared",
      description: "Shared a note on Organic Chemistry",
      timestamp: "2026-03-15T16:45:00Z",
    },
    {
      id: 4,
      type: "message",
      description: "Commented on CSC 201 Notes Discussion",
      timestamp: "2026-03-14T09:00:00Z",
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