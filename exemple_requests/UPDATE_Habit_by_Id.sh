API_URL="http://localhost:3000/habits/6821050b07ad0aeaf14e065b"
JWT_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjBmMTc5NzQ5NmMyMDkzYjYwOTQzZCIsImlhdCI6MTc0Njk5NDQxNSwiZXhwIjoxNzQ2OTk4MDE1fQ.Zn4l_FvGF4TisIbfI4JY5D5OBWiq_c7rNnoDHeuQif8"

curl -X PUT "$API_URL" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $JWT_TOKEN" \
  -d '{
    "name": "Beber água atualizado",
    "description": "Tomar 10 copos por dia",
    "frequency": ["specific_days"],
    "daysOfWeek": ["seg", "qua", "sex"],
    "completedDates": ["2024-02-20T00:00:00Z", "2024-02-21T00:00:00Z"]
  }'