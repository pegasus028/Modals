/* ===========================================================================
   FINE TUNING — media.js
   The introduction for each stage: a podcast episode, and optionally a slide
   deck and a video. Loaded after the stage files and before content-export.js.

   The `title` on each entry is what `podcasts.html` — the standalone listening
   page, which loads this file and nothing else — shows beside the player. The
   app itself uses the stage's own name, so the two can differ without
   anything breaking.

   ---------------------------------------------------------------------------
   HOW TO ADD AN EPISODE

   Record it, save the MP3 as `audio/stage-N.mp3`, and it appears. The paths
   below are already wired for the eight stages, so in practice there is
   nothing to edit here at all: drop the file into `audio/` and the player
   shows up on that stage's card.

   HOW TO ADD A VIDEO

   Paste an ordinary YouTube link into the `video` field for that stage —
   `https://youtu.be/XXXXXXXXXXX`, a `watch?v=` link, an `/embed/` link or a
   `/shorts/` link all work. The video then plays inside the app, and the
   stage appears on the Videos screen. Until then the stage is simply absent
   from that screen and no Video button is drawn.

   HOW TO ADD SLIDES

   `slides` takes any URL that serves a PDF directly. A Google Drive share
   link will NOT work: Drive returns a viewer page rather than the file.
   Upload the PDF beside the app instead and use a relative path,
   `slides/stage-3.pdf`.

   A FIELD LEFT EMPTY MEANS NO BUTTON. That is deliberate — episodes, videos
   and decks can be added one at a time, in any order, and a stage with no
   media simply shows no strip. Nothing else in the app needs touching, and
   nothing breaks while a field is still blank.

   Listening and watching are tracked like anything else a student does. The
   teacher console reports plays, minutes heard, whether the episode was
   finished, and how often the slides and video were opened — with the stages
   nobody has opened marked in red. A student stuck on a stage who never
   played its introduction is a different teaching problem from one who did.
   =========================================================================== */

var MEDIA = {
  t1: { title: 'The Modal Frame',                       podcast: 'audio/stage-1.mp3', slides: '', video: '' },
  t2: { title: 'The Ladder of Certainty',               podcast: 'audio/stage-2.mp3', slides: '', video: '' },
  t3: { title: 'Obligation, Permission, Prohibition',   podcast: 'audio/stage-3.mp3', slides: '', video: '' },
  t4: { title: 'Ability and Willingness',               podcast: 'audio/stage-4.mp3', slides: '', video: '' },
  t5: { title: 'Distance',                              podcast: 'audio/stage-5.mp3', slides: '', video: '' },
  t6: { title: 'Modality in Past Time',                 podcast: 'audio/stage-6.mp3', slides: '', video: '' },
  t7: { title: 'Hedging and Stance',                    podcast: 'audio/stage-7.mp3', slides: '', video: '' },
  t8: { title: 'The Whole System',                      podcast: 'audio/stage-8.mp3', slides: '', video: '' },
  t9: { title: 'Unit 5 Review',                         podcast: 'audio/stage-9.mp3', slides: '', video: '' },
  t10: { title: 'Modals in the TCAS70 Paper',           podcast: '', slides: '', video: '' }   /* save audio/stage-10.mp3 and set podcast to that path */
};

/* How long each episode runs, in minutes, if you want the card to say so.
   Leave a stage out and the card simply does not mention a length. */
var MEDIA_MINUTES = {};
