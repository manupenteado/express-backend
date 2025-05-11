curl -X POST "https://express-backend-manupenteado.vercel.app/habits" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjBmMTc5NzQ5NmMyMDkzYjYwOTQzZCIsImlhdCI6MTc0Njk5NjEwNSwiZXhwIjoxNzQ2OTk5NzA1fQ.s5fWYynscpITCrQ32v6elc4_SyGIcbFbZUYw_4T9M6Y" \
  -d '{
    "name": "Beber água",
    "description": "Tomar 8 copos por dia",
    "frequency": ["daily"],
    "daysOfWeek": [],
    "completedDates": ["2024-02-20T00:00:00Z"]
  }'