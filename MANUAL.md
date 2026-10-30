# Reel Ledger — manual

Reel Ledger is a phone app for ticking off films you've seen. It ships with two lists:

- **IMDb Top 250** — the chart as of September 2026 (ranks, ratings, vote counts).
- **Best Picture** — every nominee and winner for the Academy Award for Best Picture, 1st ceremony (1929) through 98th (March 2026): 621 films, 98 winners.

There are 778 titles in total (93 films are on both lists). You can add your own lists of series, books, games or anything else.

## The five tabs

| Tab | What it shows |
|---|---|
| **All** | Every title in one poster grid. Your progress on the three built-in lists sits at the top. |
| **Top 250** | The IMDb chart in rank order. Each poster shows its rank. |
| **Oscars** | One block per ceremony, newest first: the winner large, the other nominees in a row you swipe sideways. "Winners only" hides the nominees. Each block shows how many of that year's race you've seen (e.g. 6/10). |
| **For you** | Recommendations gathered from every film you've marked seen, ranked by hits. See below. |
| **Lists** | Your lists, new lists, backups, and install help. |

## Marking films

- **Tap the square on a poster** to mark it seen. Tap again to unmark. A seen poster dims and the square turns green.
- **Tap the poster or title** to open its detail card.
- In the detail card, **Mark seen** and **Want to see** are the two big buttons. "Want to see" puts an orange bookmark on the poster and adds the film to your watchlist.
- Marking a film seen removes it from the watchlist automatically.

## View-only lock

Hand your phone to someone, or just browse, without changing anything:

- **Tap the lock** (top right) to switch to view only. It turns gold and the header says *View only*.
- While locked, unseen posters have no checkbox, so tapping anywhere on a poster opens its details. Seen films keep their green check.
- Mark seen, Want to see, the Best Picture race checkboxes, restoring a backup and editing lists are all blocked. Search, filters, sorting and details work as usual.
- **To unlock, press and hold the lock for about a second** until the green ring closes. A quick tap won't unlock it.
- The lock stays on after you close the app.

## The detail card

Each film shows:

- Plot summary, director, writers, main cast
- Release year and **setting**: when and where the story takes place, with a note when it's set in its own time
- **True story** (yes/no), **Historical / period piece** (yes/no), and what it's based on (novel, play, true story…)
- Runtime, country, language, IMDb rank and rating
- **Oscar record**: every Oscar it won (gold dot) and every nomination it lost (hollow dot)
- For any Best Picture nominee: **the full Best Picture race of that year**, winner first, each with its own checkbox. Tap a name to jump to that film; tap its box to mark it without leaving.
- **More like this**: six similar films with a one-line reason each. Some are on your lists, others aren't (marked **Off list**). Tap one to open it; the **‹** button at the top of the card takes you back.
- Links to IMDb, Wikipedia, and JustWatch (where to stream it)

Tap outside it, tap ✕, or press your phone's Back button to close it.

## People

Every director, writer and cast name on a detail card can be tapped. It opens that person's **filmography in the app**: every film they directed, wrote or acted in across your lists and the recommended picks, oldest first, with how many you've seen. The small gold number next to a name tells you how many titles they have in the app. All filters still work on top (for example *Not seen* to see which of a director's films you're missing). Tap ✕ on the person card to go back to everything.

## Off-list films

Recommendations include 1,441 films that aren't on the IMDb Top 250 or Best Picture lists. They get the same full detail card as every other film (plot, director, writers, cast, setting, true story, historical, based on), plus a **Recommended from** list showing which of your films pointed to them and why. The 703 that won or were nominated for Oscars in any category also show their Oscar record and link straight to their IMDb page; the rest open an IMDb search. You can mark them seen or want to see like any other film; once marked they also appear in **All**. To browse them all, use Filters → In list → **Recommended picks**.

## For you

The **For you** tab looks at every film you've marked seen, collects their *More like this* picks, and ranks them by **hits**: how many of your seen films recommend each one. A film with *4 hits* is recommended by four films you've watched, so it's the safest bet.

- It shows films you haven't seen yet. The **Seen** chip shows the ones you'd already watched, and **Want to see** shows the ones on your watchlist.
- Mark a suggestion seen and it leaves the list next time you open the tab. Its own recommendations join in, so the list keeps learning from what you watch.
- Filters and search work here too: e.g. *Not in English* + *2000s*, or *Recommended picks* to see only discoveries outside your lists.

## Search, status and filters

- **Search** matches title, director, writer and cast. Try "Kubrick" or "Meryl Streep".
- **Status chips** under the search bar: All · Not seen · Seen · Want to see. Each shows a live count.
- **Filters** opens a panel with:
  - **Sort**: best for this view, IMDb rank, IMDb rating, newest, oldest, title, most Oscar wins, recently marked seen
  - **In list**: IMDb Top 250, Best Picture winners, Best Picture nominees, and your own lists
  - **Story**: based on a true story, historical/period, based on a book, animated, not in English, under 100 min, over 150 min, before 1960, 2020 or later, 3+ Oscar wins
  - **Genre** and **Decade**
- Filters combine. Example: *Not seen* + *Best Picture winners* + *Based on a true story* + sort *Oldest first* gives a history-film watchlist in order.
- "Clear filters" above the grid resets everything.

## Your own lists (series, books, games…)

In the **Lists** tab, under **New list**:

1. Type a name, choose a kind (Movies, Series, Books, Games, Other), tap **Create list**.
2. On the new list, tap **Add a title**: title, year, creator (director / author / studio), optional note.
3. Titles you add get the same seen / want-to-see marks and show up in All, Search and Filters.

**Pasting a whole list at once.** Tap **Paste a list file** and paste JSON in this shape:

```json
{
  "list": { "name": "Best video games", "media": "game" },
  "items": [
    { "title": "Hollow Knight", "year": 2017, "creator": "Team Cherry",
      "plot": "A knight explores a ruined insect kingdom.", "genres": ["Adventure"],
      "poster": "https://… (optional image URL)" }
  ]
}
```

`media` can be `movie`, `series`, `book`, `game` or `other`. For movies you can also give `imdb`, `directors`, `writers`, `cast`, `runtime`, `trueStory`, `historical`, `basedOn`, `source` and `setting`. If a movie's `imdb` ID is already in the app, the existing entry is reused, so your marks carry over.

The easy way to get such a file: ask Claude, *"Make a Reel Ledger list file of the top 100 TV series"*, then paste the result.

## Backups

Your marks live on the phone, in this app only. To keep them safe or move them to another device:

- **Copy backup** puts all your marks and custom lists on the clipboard. Paste it into a note, email or your tracker.
- **Restore from backup** → paste → **Restore**. It merges, so nothing already marked is lost.
- On the installed app there's also **Download backup file**.

## Install on your phone

Reel Ledger is a web app you install from the browser. It needs to be hosted at an `https://` address once; GitHub Pages does this for free.

**Host it (once, ~5 minutes):**

1. On github.com, create a new **public** repository, e.g. `reel-ledger`.
2. Upload every file from the `reel-ledger` folder (keep `data/catalog.json` inside its `data` folder, and include the `.nojekyll` file).
3. Repository **Settings → Pages** → Source: *Deploy from a branch*, Branch: `main`, folder `/ (root)` → Save.
4. After a minute the app is live at `https://<your-username>.github.io/reel-ledger/`.

**Install (Android, Chrome):** open that address → menu ⋮ → **Install app** (or *Add to Home screen*). It opens full screen, has its own icon, and works offline.

**iPhone (Safari):** Share → **Add to Home Screen**.

**Preview without hosting:** a copy also runs as a page inside Claude (link on the tracker item). It works the same, but it can't be installed, shows title cards instead of posters, and keeps its own marks. Use Copy backup / Restore to move marks to the installed app.

Posters download from Wikipedia the first time you open the app with internet, then stay cached for offline use. Titles without a poster show a colored title card instead.

## Updating the data later

- All films live in `data/catalog.json`. To refresh the IMDb chart or add next year's Oscar race, replace that file and upload it to the repository; the app picks it up on next open. Your marks are kept because they're stored by IMDb ID.
- To add a new kind of media to the app itself, add one line to the `MEDIA` table at the top of the script in `index.html` (label, plural, what to call the creator).

## Sources and accuracy

- **IMDb Top 250**: chart snapshot from September 2026. The live chart moves a few places every week.
- **Oscar nominations and wins**: the Academy's records, via the open `oscar_data` dataset on GitHub, current through the 98th Academy Awards. Director names were cross-checked against the Academy's Best Director nominations; none conflicted.
- **Plot, cast, writers, setting, true story and historical flags**: written for this app from general film knowledge. They're right for the vast majority of titles; 56 titles (mostly 1930s nominees and 2025–26 releases) carry a note on their card saying the details are less certain. If something looks off, the IMDb link is one tap away.
- **Recommendations**: six hand-picked similar films per title, chosen for this app from general film knowledge (not an algorithm on viewing data). Off-list films' details were written the same way; their Oscar records and IMDb links come from the Academy's data where the film was nominated.
- **Posters**: the lead image of each film's English Wikipedia article.
