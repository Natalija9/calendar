mongo CalendarDB --eval "db.dropDatabase()"
mongoimport --db CalendarDB --collection users --file users.json --jsonArray
mongoimport --db CalendarDB --collection meetings --file meetings.json --jsonArray