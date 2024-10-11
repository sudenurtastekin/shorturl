import { redirect } from 'next/navigation';

const ShortUrlPage = async ({ params }) => {
  const { shorturl } = params;
  const response = await fetch(`https://nkmvhnwulrqvvmnzfmdz.supabase.co/rest/v1/urls?short_url=eq.${shorturl}`, {
    headers: {
      "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rbXZobnd1bHJxdnZtbnpmbWR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MDI2NjAsImV4cCI6MjA0MzM3ODY2MH0.57lDrq8eEdkSO_CpN-rSacX6j_cljo2_RA_tlp00Jl0",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rbXZobnd1bHJxdnZtbnpmbWR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MDI2NjAsImV4cCI6MjA0MzM3ODY2MH0.57lDrq8eEdkSO_CpN-rSacX6j_cljo2_RA_tlp00Jl0"
    }
  });
  const data = await response.json();

  if (data.length > 0) {
    const longUrl = data[0].long_url;

    redirect(longUrl);
  } else {

    redirect('/404');
  }
};

export default ShortUrlPage;