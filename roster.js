/* ===========================================================================
   FINE TUNING — roster.js
   The class list behind the "Fast Access" tab on the sign-in screen.

   A student picks their nickname instead of typing an ID, which is where most
   sign-in trouble comes from: a mistyped ID makes a second, empty account and
   the work done under it never reaches the class sheet.

   ---------------------------------------------------------------------------
   TO CHANGE THE CLASS

   Edit the list below: each row is { id: '<student number>', name: '<nickname>' }.
   Order does not matter — the tab sorts by nickname. Two students may share a
   nickname; the dropdown shows the student number beside each, so they can
   still tell themselves apart.

   Anyone not on this list can still use the "Create account" tab, which is
   unchanged. The roster is a convenience, never a gate.

   Nothing here is secret: it is a list of nicknames and student numbers, and
   it sits in a public file. Do not put anything else in it.

   TO TURN THE TAB OFF ENTIRELY, leave ROSTER as an empty array. The tab hides
   itself and everyone signs in by ID.
   =========================================================================== */

/* The label on the tab. 'M.4.1' becomes "4.1 Fast Access". */
var ROSTER_CLASS = 'M.4.1';

/* A deadline to count down to, as YYYY-MM-DDTHH:MM on the student's own clock.
   This is self-study with no fixed paper, so it is empty and the countdown
   simply does not appear. Set it if you attach the course to a test date. */
var EXAM_AT = '';

/* One row per student. Replace these with the real class. */
var ROSTER = [
];
