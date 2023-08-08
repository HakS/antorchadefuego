// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createEvent, DateArray, EventAttributes } from 'ics';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  res.setHeader("Content-Type", "text/calendar");
  res.setHeader("Content-Disposition", 'attachment; filename="schedule.ics"');
  const { evento } = req.query;
  if (typeof evento != "string") {
    res.status(400).send("Event parameter malformed.");
    return;
  }

  const now = new Date();
  const todayArray: DateArray = [now.getFullYear(), now.getMonth() + 1, now.getDate()];

  const eventMap: { [key: string] : EventAttributes } = {
    amanecerEnVictoria: {
      start: [...todayArray, 5, 0],
      duration: { hours: 1 },
      recurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR',
      title: 'Devocional Amanecer en Victoria',
      description: 'Únete y Comparte esta transmisión con tu familia y amigos! Escríbenos tus peticiones de oración!',
      organizer: { name: "Mabel Donado" },
      location: 'Iglesia Antorcha de Fuego',
      url: 'https://www.antorchadefuego.org/',
      geo: { lat: 11.017902595407524, lon: -74.80472478147752 },
    },
    oracionEficaz: {
      start: [...todayArray, 15, 0],
      duration: { hours: 1 },
      recurrenceRule: 'FREQ=WEEKLY;BYDAY=TU,WE,TH,FR',
      title: 'Programa Oración Eficaz',
      description: 'Únete y Comparte esta transmisión con tu familia y amigos! Escríbenos tus peticiones de oración!',
      organizer: { name: "Mabel Donado" },
      location: 'Iglesia Antorcha de Fuego',
      url: 'https://www.antorchadefuego.org/',
      geo: { lat: 11.017902595407524, lon: -74.80472478147752 },
    },
  };

  if (!(evento in eventMap)) {
    res.status(404).send("Event not found");
    return;
  }

  const { error, value } = createEvent(eventMap[evento]);
  if (error || !value) {
    res.status(500).send(error ? error.message : 'Calendar is empty');
    return;
  }

  res.send(value);
}
