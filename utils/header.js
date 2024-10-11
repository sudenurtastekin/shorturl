const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rbXZobnd1bHJxdnZtbnpmbWR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MDI2NjAsImV4cCI6MjA0MzM3ODY2MH0.57lDrq8eEdkSO_CpN-rSacX6j_cljo2_RA_tlp00Jl0"


export const defaultHeader = {
  "apikey": apikey,
  "Authorization": `Bearer ${apikey}`,
  "Content-Type": "application/json"
}