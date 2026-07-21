const STORAGE = {
  tasks: 'daylight.tasks.v1',
  daily: 'daylight.daily.v1',
  history: 'daylight.history.v1'
};

const quotes = [
  'A gentle beginning can still lead somewhere beautiful.',
  'Olivia, you do not have to hurry to be making progress.',
  'Let today be soft enough to hear your own heart.',
  'Small steps carry brave hearts a very long way.',
  'Olivia, the care you give yourself becomes light for everything else.',
  'There is courage in choosing one meaningful thing.',
  'Your pace is allowed to feel like peace.',
  'A little hope can warm an entire morning.',
  'Begin with kindness and let the rest unfold.',
  'You are growing, Olivia, even on the quiet days.',
  'What you nurture with love learns how to bloom.',
  'Make a home inside the moment you are in.',
  'Today does not need perfection, Olivia; it only needs your presence.',
  'The next kind choice is always enough.',
  'Give your energy to what gives life back to you.',
  'Your ordinary effort is building something extraordinary.',
  'Peace often arrives disguised as a smaller plan.',
  'Olivia, you deserve the same patience you offer everyone else.',
  'Let the good be simple today.',
  'There is beauty in doing one thing with your whole heart.',
  'Trust the quiet work that no one else can see.',
  'Every fresh start begins in this exact moment.',
  'You can be proud before the work is finished, Olivia.',
  'Choose what makes tomorrow feel cared for.',
  'The sun returns without asking yesterday for permission.',
  'Tenderness is a strength you can build a life around.',
  'Leave a little room for delight to surprise you.',
  'Your best today can be gentle and still be enough, Olivia.',
  'A calm heart can move mountains one pebble at a time.',
  'Let one completed thing become a gift to yourself.',
  'Olivia, you are not behind; you are becoming in your own time.',
  'Where attention goes, a small garden begins.',
  'Keep the promise that brings you closer to yourself.',
  'Even a cloudy day carries its own kind of light.',
  'You can make progress without making yourself small.',
  'Rest and purpose belong in the same beautiful life.',
  'A loving life is made from loving little moments.',
  'Let your next step be honest, not enormous.',
  'Your heart knows the difference between pressure and purpose.',
  'Olivia, celebrate the effort that only you know it took.',
  'Something good can begin with five quiet minutes.',
  'You are allowed to build a life that feels like yours, Olivia.',
  'The smallest act of care is never wasted.',
  'Be where your feet are and bring your heart along.',
  'Today is another chance to choose what nourishes you.',
  'There is no wrong season for beginning again.',
  'Olivia, your softness and your strength have always been friends.',
  'One clear intention can brighten the whole day.',
  'Let enough be a warm place to land.',
  'You have already survived every day that asked too much.',
  'The life you want is listening to what you do today.',
  'Slow is still a sacred kind of forward.',
  'Your attention is precious; place it somewhere kind.',
  'Begin before you feel ready, but begin gently.',
  'A meaningful day does not have to be a busy one.',
  'Choose what matters and let the rest be quiet.',
  'Your future self will feel today’s small kindness.',
  'Love can look like finishing the task you kept avoiding.',
  'The next chapter can start in the middle of the page.',
  'You are worthy of a life with breathing room, Olivia.',
  'Let your courage be quiet and consistent.',
  'Good things grow where patience keeps showing up.',
  'Do what matters, then let yourself come home.',
  'A peaceful pace is still a powerful pace.',
  'The day softens when you stop fighting your own rhythm.',
  'Your effort counts long before anyone applauds it.',
  'Make today a love letter to the life you are building.',
  'The brave thing may simply be to begin.',
  'You carry more light than this moment can hide.',
  'Your hopes deserve a place on today’s list.',
  'Tiny victories know how to become confidence.',
  'Give the day a direction, not a demand.',
  'What feels slow may be taking root.',
  'Be gentle with the part of you that is still learning.',
  'One good choice can change the texture of a day.',
  'You are allowed to protect your peace and pursue your dreams.',
  'There is joy waiting inside your full attention.',
  'Your life is happening in the little in-between moments too.',
  'The work becomes lighter when you stop carrying tomorrow.',
  'Today, let progress feel like a deep breath.',
  'A soft heart can make a strong decision.',
  'You are closer than yesterday and wiser than before.',
  'Let your plan be a path, not a cage.',
  'What you finish today makes space for what comes next.',
  'A quiet yes to yourself can change everything.',
  'There is dignity in every honest attempt.',
  'Your dreams do not need you exhausted; they need you present.',
  'Make room for the version of you who enjoys the journey.',
  'The morning is not a test; it is an invitation.',
  'A beautiful life can be built in very small pieces.',
  'Your kindness belongs on your own to-do list too.',
  'Let today hold both ambition and ease.',
  'The things done with care leave a different kind of glow.',
  'You can start small without dreaming small.',
  'Meet this day with curiosity instead of judgment.',
  'Progress loves a patient place to grow.',
  'You are capable of doing hard things softly.',
  'Let the next hour be enough to hold.',
  'A rested mind can hear its best ideas.',
  'Your path does not need to look crowded to be full.',
  'Keep choosing what makes your spirit feel spacious.',
  'A task completed with peace is a double victory.',
  'You can honor your limits and still honor your goals.',
  'There is strength in a beautifully simple plan.',
  'The light you need may be the light you give yourself.',
  'Let one clear action quiet ten noisy thoughts.',
  'Your worth stays whole on unfinished days.',
  'Today can be useful and lovely at the same time.',
  'Be proud of every time you returned to what mattered.',
  'A gentle routine can hold a powerful dream.',
  'Trust yourself to know what deserves today.',
  'There is more than one beautiful way forward.',
  'Let your work be focused and your heart be free.',
  'Every done thing began as a tiny decision.',
  'You are making a life, not merely finishing a list.',
  'The day becomes yours when your attention does.',
  'Give yourself credit for choosing to try again.',
  'Make space for wonder between the checkmarks.',
  'Your quiet consistency is a kind of magic.',
  'A caring choice now becomes an easier breath later.',
  'You can let go of urgency without letting go of purpose.',
  'Let your goals feel like invitations to grow.',
  'A sweet life is gathered one present moment at a time.',
  'Your energy is a garden; tend it with intention.',
  'The simplest next step is often the wisest one.',
  'You are allowed to feel good while doing good work.',
  'Today’s small discipline can become tomorrow’s freedom.',
  'Love the life you have while shaping the life you want.',
  'There is grace in beginning exactly where you are.',
  'Your calm is not laziness; it is clarity.',
  'Do less with more love.',
  'A single focused hour can feel like sunlight.',
  'The most important thing is often the one done gently.',
  'Let your accomplishments include the peace you protected.',
  'You can be a work in progress and a wonder right now.',
  'The day is spacious enough for one meaningful beginning.',
  'Make the next choice one your heart can rest inside.',
  'Your presence turns simple moments into a life.',
  'Keep a little softness around your determination.',
  'You are not late to your own becoming.',
  'Every loving effort leaves the world a little warmer.',
  'Let today surprise you with what a few small steps can do.',
  'Your peace is part of the progress.',
  'The courage to simplify is still courage.',
  'Give yourself a day you will be grateful to remember.',
  'A clear heart makes room for meaningful work.',
  'You can carry hope without carrying everything.',
  'Your one precious life is made of ordinary Tuesdays too.',
  'Finish what matters, forgive what does not, and breathe.',
  'You are enough, and you can still be excited to grow.'
];

const elements = {
  todayLabel: document.querySelector('#todayLabel'),
  quoteText: document.querySelector('#quoteText'),
  quoteControl: document.querySelector('#quoteControl'),
  openHistoryButton: document.querySelector('#openHistoryButton'),
  closeHistoryButton: document.querySelector('#closeHistoryButton'),
  historyDrawer: document.querySelector('#historyDrawer'),
  historyBackdrop: document.querySelector('#historyBackdrop'),
  historyList: document.querySelector('#historyList'),
  historyEmpty: document.querySelector('#historyEmpty'),
  openChangelogButton: document.querySelector('#openChangelogButton'),
  closeChangelogButton: document.querySelector('#closeChangelogButton'),
  changelogDrawer: document.querySelector('#changelogDrawer'),
  changelogBackdrop: document.querySelector('#changelogBackdrop'),
  openTasksButton: document.querySelector('#openTasksButton'),
  closeTasksButton: document.querySelector('#closeTasksButton'),
  drawer: document.querySelector('#taskDrawer'),
  backdrop: document.querySelector('#drawerBackdrop'),
  form: document.querySelector('#taskForm'),
  input: document.querySelector('#taskInput'),
  inputCount: document.querySelector('#inputCount'),
  taskList: document.querySelector('#taskList'),
  taskTemplate: document.querySelector('#taskItemTemplate'),
  collectionEmpty: document.querySelector('#collectionEmpty'),
  collectionCount: document.querySelector('#collectionCount'),
  headerTaskCount: document.querySelector('#headerTaskCount'),
  clearTasksButton: document.querySelector('#clearTasksButton'),
  todayHeading: document.querySelector('#todayHeading'),
  emptyState: document.querySelector('#emptyState'),
  selectedList: document.querySelector('#selectedList'),
  addRandomTaskButton: document.querySelector('#addRandomTaskButton'),
  addRandomTaskLabel: document.querySelector('#addRandomTaskLabel'),
  randomizeButton: document.querySelector('#randomizeButton'),
  randomizeLabel: document.querySelector('#randomizeLabel'),
  buttonHint: document.querySelector('#buttonHint'),
  progressLabel: document.querySelector('#progressLabel'),
  toast: document.querySelector('#toast'),
  confetti: document.querySelector('#confetti')
};

let tasks = loadJSON(STORAGE.tasks, []);
let daily = loadJSON(STORAGE.daily, { date: todayKey(), selected: [], completed: [] });
let history = loadJSON(STORAGE.history, []);
let quoteIndex = Math.floor(Math.random() * quotes.length);
let quoteInterval;
let quotePaused = false;
let toastTimer;
let swipeGesture = null;
const SWIPE_REVEAL = 82;

if (!Array.isArray(tasks)) tasks = [];
if (!Array.isArray(history)) history = [];
if (!daily || !Array.isArray(daily.selected) || !Array.isArray(daily.completed)) {
  daily = { date: todayKey(), selected: [], completed: [] };
} else if (daily.date !== todayKey()) {
  archiveLegacyDaily();
  daily = { date: todayKey(), selected: [], completed: [] };
}

function loadJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
}

function saveState() {
  localStorage.setItem(STORAGE.tasks, JSON.stringify(tasks));
  localStorage.setItem(STORAGE.daily, JSON.stringify(daily));
  localStorage.setItem(STORAGE.history, JSON.stringify(history));
}

function todayKey() {
  const date = new Date();
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join('-');
}

function archiveLegacyDaily() {
  if (!daily?.date || !Array.isArray(daily.completed)) return;
  daily.completed.forEach((taskId) => {
    const task = tasks.find((item) => item.id === taskId);
    if (!task || history.some((entry) => entry.taskId === taskId && entry.assignedDate === daily.date)) return;
    history.push({
      id: makeId(),
      taskId,
      taskName: task.name,
      assignedDate: daily.date,
      completedDate: daily.date,
      completedAt: null
    });
  });
}

function makeId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function setDateLabel() {
  elements.todayLabel.textContent = new Intl.DateTimeFormat(undefined, {
    weekday: 'long', month: 'long', day: 'numeric'
  }).format(new Date()).toUpperCase();
}

function countWord(count) {
  const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  return words[count] || String(count);
}

function capitalizedCount(count) {
  const value = countWord(count);
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function renderTasks() {
  elements.taskList.replaceChildren();
  tasks.forEach((task) => {
    const item = elements.taskTemplate.content.firstElementChild.cloneNode(true);
    item.dataset.id = task.id;
    item.querySelector('.task-name').textContent = task.name;
    item.querySelector('.delete-task').setAttribute('aria-label', `Delete ${task.name}`);
    elements.taskList.append(item);
  });

  const count = tasks.length;
  elements.collectionEmpty.hidden = count > 0;
  elements.collectionCount.textContent = `${count} saved ${count === 1 ? 'task' : 'tasks'}`;
  elements.headerTaskCount.textContent = count > 99 ? '99+' : count;
  elements.clearTasksButton.disabled = count === 0;
  elements.randomizeButton.disabled = count < 3;
  elements.buttonHint.textContent = count < 3
    ? `Add ${3 - count} more ${3 - count === 1 ? 'task' : 'tasks'} to begin`
    : daily.selected.length
      ? (count === daily.selected.length ? 'Every saved task is in today’s list' : `${count - daily.selected.length} unused ${count - daily.selected.length === 1 ? 'task' : 'tasks'} available`)
      : `${count} possibilities in your collection`;
}

function renderDaily() {
  const validIds = new Set(tasks.map((task) => task.id));
  daily.selected = daily.selected.filter((id) => validIds.has(id));
  daily.completed = daily.completed.filter((id) => daily.selected.includes(id));
  if (daily.selected.length > 0 && daily.selected.length < 3) {
    daily.selected = [];
    daily.completed = [];
  }
  saveState();

  elements.selectedList.replaceChildren();
  elements.emptyState.hidden = daily.selected.length > 0;

  daily.selected.forEach((id, index) => {
    const task = tasks.find((item) => item.id === id);
    if (!task) return;
    const isRemovable = index >= 3;
    const card = document.createElement('li');
    card.className = `selected-card${daily.completed.includes(id) ? ' is-complete' : ''}${isRemovable ? ' is-removable' : ' is-required'}`;
    card.dataset.id = id;
    card.innerHTML = `
      ${isRemovable ? `<button class="remove-daily-task" type="button" aria-label="Remove ${escapeAttribute(task.name)} from today">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>
        <span>Remove</span>
      </button>` : ''}
      <div class="selected-card-surface">
        <button class="reroll-task" type="button" ${tasks.length <= daily.selected.length ? 'disabled' : ''} aria-label="Replace task: ${escapeAttribute(task.name)}">
          <svg viewBox="0 0 28 28" aria-hidden="true">
            <rect class="dice-face" x="1" y="1" width="26" height="26" rx="7"/>
            <circle class="dice-dot" cx="8" cy="8" r="1.7"/>
            <circle class="dice-dot" cx="20" cy="8" r="1.7"/>
            <circle class="dice-dot" cx="14" cy="14" r="1.7"/>
            <circle class="dice-dot" cx="8" cy="20" r="1.7"/>
            <circle class="dice-dot" cx="20" cy="20" r="1.7"/>
          </svg>
        </button>
        <span class="selected-name"></span>
        <button class="complete-button" type="button" aria-label="${daily.completed.includes(id) ? 'Mark incomplete' : 'Mark complete'}: ${escapeAttribute(task.name)}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6.5 12.5 3.4 3.4 7.6-8"/></svg>
        </button>
      </div>`;
    card.querySelector('.selected-name').textContent = task.name;
    elements.selectedList.append(card);
  });

  const completeCount = daily.completed.length;
  const hasSelection = daily.selected.length > 0;
  const selectedCount = daily.selected.length;
  const remainingCount = Math.max(0, tasks.length - selectedCount);
  elements.todayHeading.textContent = `Today’s ${countWord(selectedCount || 3)}`;
  elements.progressLabel.textContent = hasSelection
    ? (completeCount === selectedCount ? 'All done — beautiful work' : `${completeCount} of ${selectedCount} complete`)
    : 'Ready when you are';
  elements.randomizeLabel.textContent = hasSelection ? `Choose ${capitalizedCount(selectedCount)} New Tasks` : 'Select Random Tasks for the Day';
  elements.addRandomTaskButton.hidden = !hasSelection;
  elements.addRandomTaskButton.disabled = !remainingCount;
  elements.addRandomTaskLabel.textContent = remainingCount ? 'Add Another Random Task' : 'All Saved Tasks Added';
  if (hasSelection) {
    elements.buttonHint.textContent = remainingCount
      ? `${remainingCount} unused ${remainingCount === 1 ? 'task' : 'tasks'} available`
      : 'Every saved task is in today’s list';
  }
}

function renderHistory() {
  const completed = [...history]
    .filter((entry) => entry?.taskName && entry.completedDate)
    .sort((a, b) => (b.completedAt || b.completedDate).localeCompare(a.completedAt || a.completedDate));

  elements.historyList.replaceChildren();
  elements.historyEmpty.hidden = completed.length > 0;
  elements.historyList.hidden = completed.length === 0;

  const groups = completed.reduce((map, entry) => {
    if (!map.has(entry.completedDate)) map.set(entry.completedDate, []);
    map.get(entry.completedDate).push(entry);
    return map;
  }, new Map());

  groups.forEach((entries, dateKey) => {
    const section = document.createElement('section');
    section.className = 'history-day';
    const heading = document.createElement('h3');
    heading.className = 'history-date';
    heading.textContent = formatHistoryDate(dateKey);
    const list = document.createElement('ul');
    list.className = 'history-items';

    entries.forEach((entry) => {
      const item = document.createElement('li');
      item.className = 'history-item';
      const check = document.createElement('span');
      check.className = 'history-check';
      check.setAttribute('aria-hidden', 'true');
      check.textContent = '✓';
      const name = document.createElement('span');
      name.className = 'history-task-name';
      name.textContent = entry.taskName;
      const time = document.createElement('time');
      time.className = 'history-time';
      time.textContent = entry.completedAt ? formatHistoryTime(entry.completedAt) : '';
      item.append(check, name, time);
      list.append(item);
    });

    section.append(heading, list);
    elements.historyList.append(section);
  });
}

function formatHistoryDate(dateKey) {
  const [year, month, day] = dateKey.split('-').map(Number);
  return new Intl.DateTimeFormat(undefined, {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
  }).format(new Date(year, month - 1, day));
}

function formatHistoryTime(timestamp) {
  return new Intl.DateTimeFormat(undefined, { hour: 'numeric', minute: '2-digit' }).format(new Date(timestamp));
}

function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function openDrawer() {
  elements.backdrop.hidden = false;
  requestAnimationFrame(() => elements.backdrop.classList.add('is-visible'));
  elements.drawer.classList.add('is-open');
  elements.drawer.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  setTimeout(() => elements.input.focus(), 430);
}

function closeDrawer() {
  elements.backdrop.classList.remove('is-visible');
  elements.drawer.classList.remove('is-open');
  elements.drawer.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  setTimeout(() => { elements.backdrop.hidden = true; }, 300);
  elements.openTasksButton.focus();
}

function openHistory() {
  renderHistory();
  elements.historyBackdrop.hidden = false;
  requestAnimationFrame(() => elements.historyBackdrop.classList.add('is-visible'));
  elements.historyDrawer.classList.add('is-open');
  elements.historyDrawer.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeHistory() {
  elements.historyBackdrop.classList.remove('is-visible');
  elements.historyDrawer.classList.remove('is-open');
  elements.historyDrawer.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  setTimeout(() => { elements.historyBackdrop.hidden = true; }, 300);
  elements.openHistoryButton.focus();
}

function openChangelog() {
  elements.changelogBackdrop.hidden = false;
  requestAnimationFrame(() => elements.changelogBackdrop.classList.add('is-visible'));
  elements.changelogDrawer.classList.add('is-open');
  elements.changelogDrawer.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeChangelog() {
  elements.changelogBackdrop.classList.remove('is-visible');
  elements.changelogDrawer.classList.remove('is-open');
  elements.changelogDrawer.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  setTimeout(() => { elements.changelogBackdrop.hidden = true; }, 300);
  elements.openChangelogButton.focus();
}

function addTask(name) {
  const cleanName = name.trim().replace(/\s+/g, ' ');
  if (!cleanName) return;
  if (tasks.some((task) => task.name.toLowerCase() === cleanName.toLowerCase())) {
    showToast('That task is already in your collection.');
    return;
  }
  tasks.unshift({ id: makeId(), name: cleanName, createdAt: Date.now() });
  saveState();
  renderTasks();
  elements.form.reset();
  elements.inputCount.textContent = '0 / 90';
  showToast('Saved for a good day ahead.');
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  daily.selected = daily.selected.filter((taskId) => taskId !== id);
  daily.completed = daily.completed.filter((taskId) => taskId !== id);
  saveState();
  renderTasks();
  renderDaily();
  showToast('Task removed.');
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function selectRandomTasks() {
  if (tasks.length < 3 || elements.randomizeButton.classList.contains('is-shuffling')) return;
  const targetCount = Math.min(tasks.length, daily.selected.length || 3);
  elements.randomizeButton.classList.add('is-shuffling');
  elements.randomizeButton.disabled = true;
  elements.randomizeLabel.textContent = 'Finding your focus…';

  setTimeout(() => {
    let candidates = shuffle(tasks.map((task) => task.id));
    if (tasks.length > targetCount && sameSet(candidates.slice(0, targetCount), daily.selected)) {
      candidates = [...candidates.slice(1), candidates[0]];
    }
    daily = { date: todayKey(), selected: candidates.slice(0, targetCount), completed: [] };
    saveState();
    renderDaily();
    renderTasks();
    elements.randomizeButton.classList.remove('is-shuffling');
    elements.randomizeButton.disabled = false;
    showToast(`Your ${countWord(targetCount)} are ready. One at a time.`);
    if (navigator.vibrate) navigator.vibrate([20, 40, 20]);
  }, 720);
}

function addRandomTask() {
  if (daily.selected.length < 3) return;
  const available = tasks.filter((task) => !daily.selected.includes(task.id));
  if (!available.length) {
    showToast('Every saved task is already in today’s list.');
    return;
  }
  const nextTask = available[Math.floor(Math.random() * available.length)];
  daily.selected.push(nextTask.id);
  saveState();
  renderDaily();
  renderTasks();
  showToast(`${capitalizedCount(daily.selected.length)} tasks for today.`);
  if (navigator.vibrate) navigator.vibrate(20);
}

function removeAddedDailyTask(id) {
  const index = daily.selected.indexOf(id);
  if (index < 3) {
    showToast('Today always keeps at least three tasks.');
    return;
  }
  const task = tasks.find((item) => item.id === id);
  daily.selected.splice(index, 1);
  daily.completed = daily.completed.filter((taskId) => taskId !== id);
  saveState();
  renderDaily();
  renderTasks();
  showToast(task ? `${task.name} removed from today.` : 'Extra task removed from today.');
  if (navigator.vibrate) navigator.vibrate(20);
}

function closeSwipeCards(except = null) {
  elements.selectedList.querySelectorAll('.selected-card.is-swipe-open').forEach((card) => {
    if (card !== except) card.classList.remove('is-swipe-open');
  });
}

function finishSwipe(cancelled = false) {
  if (!swipeGesture) return;
  const { card, surface, currentOffset, wasOpen } = swipeGesture;
  const shouldOpen = cancelled ? wasOpen : currentOffset < -(SWIPE_REVEAL * .42);
  card.classList.toggle('is-swipe-open', shouldOpen);
  card.classList.remove('is-swiping');
  surface.classList.remove('is-dragging');
  surface.style.transform = '';
  swipeGesture = null;
}

function rerollTask(id) {
  if (!daily.selected.includes(id) || tasks.length <= daily.selected.length) {
    showToast('Every saved task is already in today’s list.');
    return;
  }

  const available = tasks.filter((task) => !daily.selected.includes(task.id));
  if (!available.length) return;
  const replacement = available[Math.floor(Math.random() * available.length)];
  const index = daily.selected.indexOf(id);
  daily.selected[index] = replacement.id;
  daily.completed = daily.completed.filter((taskId) => taskId !== id);
  saveState();
  renderDaily();
  renderTasks();
  showToast('That task has been gently swapped.');
  if (navigator.vibrate) navigator.vibrate(20);
}

function sameSet(a, b) {
  return a.length === b.length && a.every((id) => b.includes(id));
}

function toggleComplete(id) {
  if (daily.completed.includes(id)) {
    daily.completed = daily.completed.filter((taskId) => taskId !== id);
    let historyIndex = -1;
    for (let index = history.length - 1; index >= 0; index -= 1) {
      if (history[index].taskId === id && history[index].assignedDate === daily.date) {
        historyIndex = index;
        break;
      }
    }
    if (historyIndex >= 0) history.splice(historyIndex, 1);
  } else {
    daily.completed.push(id);
    const task = tasks.find((item) => item.id === id);
    if (task && !history.some((entry) => entry.taskId === id && entry.assignedDate === daily.date)) {
      history.push({
        id: makeId(),
        taskId: id,
        taskName: task.name,
        assignedDate: daily.date,
        completedDate: todayKey(),
        completedAt: new Date().toISOString()
      });
    }
  }
  saveState();
  renderDaily();
  renderHistory();
  if (daily.selected.length > 0 && daily.completed.length === daily.selected.length) {
    celebrate();
    showToast(`${capitalizedCount(daily.selected.length)} for ${countWord(daily.selected.length)}. You made today count.`);
  }
}

function celebrate() {
  const colors = ['#dd9b7d', '#d9b872', '#799078', '#b8c9b1', '#f2c5ad'];
  elements.confetti.replaceChildren();
  for (let i = 0; i < 42; i += 1) {
    const piece = document.createElement('i');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[i % colors.length];
    piece.style.setProperty('--drift', `${(Math.random() - .5) * 180}px`);
    piece.style.animationDelay = `${Math.random() * .45}s`;
    piece.style.animationDuration = `${1.5 + Math.random() * .8}s`;
    elements.confetti.append(piece);
  }
  setTimeout(() => elements.confetti.replaceChildren(), 2800);
}

function showToast(message) {
  clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add('is-visible');
  toastTimer = setTimeout(() => elements.toast.classList.remove('is-visible'), 2500);
}

function showNextQuote(animate = true) {
  let nextIndex = quoteIndex;
  while (nextIndex === quoteIndex) nextIndex = Math.floor(Math.random() * quotes.length);
  quoteIndex = nextIndex;
  const replace = () => {
    elements.quoteText.textContent = quotes[quoteIndex];
    elements.quoteText.classList.remove('is-changing');
  };
  if (animate && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.quoteText.classList.add('is-changing');
    setTimeout(replace, 360);
  } else replace();
  restartQuoteTimer();
}

function restartQuoteTimer() {
  clearInterval(quoteInterval);
  if (!quotePaused) quoteInterval = setInterval(() => showNextQuote(), 10000);
}

function toggleQuotes() {
  quotePaused = !quotePaused;
  elements.quoteControl.setAttribute('aria-pressed', quotePaused);
  elements.quoteControl.setAttribute('aria-label', quotePaused ? 'Resume quote rotation' : 'Pause quote rotation');
  if (quotePaused) clearInterval(quoteInterval);
  else restartQuoteTimer();
}

elements.openHistoryButton.addEventListener('click', openHistory);
elements.closeHistoryButton.addEventListener('click', closeHistory);
elements.historyBackdrop.addEventListener('click', closeHistory);
elements.openChangelogButton.addEventListener('click', openChangelog);
elements.closeChangelogButton.addEventListener('click', closeChangelog);
elements.changelogBackdrop.addEventListener('click', closeChangelog);
elements.openTasksButton.addEventListener('click', openDrawer);
elements.closeTasksButton.addEventListener('click', closeDrawer);
elements.backdrop.addEventListener('click', closeDrawer);
elements.form.addEventListener('submit', (event) => { event.preventDefault(); addTask(elements.input.value); });
elements.input.addEventListener('input', () => { elements.inputCount.textContent = `${elements.input.value.length} / 90`; });
elements.taskList.addEventListener('click', (event) => {
  const button = event.target.closest('.delete-task');
  if (button) deleteTask(button.closest('.task-item').dataset.id);
});
elements.clearTasksButton.addEventListener('click', () => {
  if (!tasks.length) return;
  if (confirm('Clear every saved task? This cannot be undone.')) {
    tasks = [];
    daily = { date: todayKey(), selected: [], completed: [] };
    saveState(); renderTasks(); renderDaily(); showToast('Your collection is clear.');
  }
});
elements.selectedList.addEventListener('click', (event) => {
  const card = event.target.closest('.selected-card');
  if (!card) return;
  if (event.target.closest('.remove-daily-task')) {
    removeAddedDailyTask(card.dataset.id);
    return;
  }
  if (card.classList.contains('is-swipe-open')) {
    card.classList.remove('is-swipe-open');
    return;
  }
  if (event.target.closest('.complete-button')) toggleComplete(card.dataset.id);
  if (event.target.closest('.reroll-task')) rerollTask(card.dataset.id);
});
elements.selectedList.addEventListener('pointerdown', (event) => {
  if (event.pointerType === 'mouse' && event.button !== 0) return;
  if (event.target.closest('button')) return;
  const card = event.target.closest('.selected-card.is-removable');
  const surface = event.target.closest('.selected-card-surface');
  if (!card || !surface) return;
  closeSwipeCards(card);
  const wasOpen = card.classList.contains('is-swipe-open');
  swipeGesture = {
    card,
    surface,
    startX: event.clientX,
    startY: event.clientY,
    startOffset: wasOpen ? -SWIPE_REVEAL : 0,
    currentOffset: wasOpen ? -SWIPE_REVEAL : 0,
    wasOpen,
    horizontal: false
  };
  surface.classList.add('is-dragging');
  if (surface.setPointerCapture && event.pointerId !== undefined) {
    try { surface.setPointerCapture(event.pointerId); } catch { /* Pointer capture is optional. */ }
  }
});
elements.selectedList.addEventListener('pointermove', (event) => {
  if (!swipeGesture) return;
  const deltaX = event.clientX - swipeGesture.startX;
  const deltaY = event.clientY - swipeGesture.startY;
  if (!swipeGesture.horizontal) {
    if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 7) {
      finishSwipe(true);
      return;
    }
    if (Math.abs(deltaX) < 7) return;
    swipeGesture.horizontal = true;
    swipeGesture.card.classList.add('is-swiping');
  }
  event.preventDefault();
  swipeGesture.currentOffset = Math.max(-SWIPE_REVEAL, Math.min(0, swipeGesture.startOffset + deltaX));
  swipeGesture.surface.style.transform = `translateX(${swipeGesture.currentOffset}px)`;
});
elements.selectedList.addEventListener('pointerup', () => finishSwipe(false));
elements.selectedList.addEventListener('pointercancel', () => finishSwipe(true));
document.addEventListener('pointerdown', (event) => {
  if (!event.target.closest('.selected-card')) closeSwipeCards();
});
elements.randomizeButton.addEventListener('click', selectRandomTasks);
elements.addRandomTaskButton.addEventListener('click', addRandomTask);
elements.quoteControl.addEventListener('click', toggleQuotes);
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  if (elements.drawer.classList.contains('is-open')) closeDrawer();
  if (elements.historyDrawer.classList.contains('is-open')) closeHistory();
  if (elements.changelogDrawer.classList.contains('is-open')) closeChangelog();
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    clearInterval(quoteInterval);
    return;
  }
  if (daily.date !== todayKey()) {
    archiveLegacyDaily();
    daily = { date: todayKey(), selected: [], completed: [] };
    saveState();
    setDateLabel();
    renderDaily();
    renderHistory();
  }
  if (!quotePaused) restartQuoteTimer();
});

setDateLabel();
elements.quoteText.textContent = quotes[quoteIndex];
renderTasks();
renderDaily();
renderHistory();
restartQuoteTimer();

if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js', { updateViaCache: 'none' }).catch(() => {}));
}
