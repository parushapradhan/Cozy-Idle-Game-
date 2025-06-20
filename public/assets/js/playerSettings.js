document.addEventListener('DOMContentLoaded', () => {
  // assume USER.level and USER.settings.time_format and USER.character are set

  const animalRadios = document.querySelectorAll('input[name="animal"]');
  const charRadios   = document.querySelectorAll('input[name="character"]');
  const toggleFormatBtn = document.getElementById('toggle-format');

  // 1) Unlock companion choices by level
  if (USER.level >= 1) document.getElementById('animal-dozy').disabled = false;
  if (USER.level >= 2) document.getElementById('animal-henrietta').disabled = false;
  if (USER.level >= 3) document.getElementById('animal-calico').disabled = false;
  if (USER.level >= 4) document.getElementById('animal-siamese').disabled = false;
  if (USER.level >= 5) document.getElementById('animal-capybara').disabled = false;

  // 2) Initialize current selections
  animalRadios.forEach(r => r.checked = (r.value === USER.animal));
  charRadios.  forEach(r => r.checked = (r.value === USER.character));

  // 3) Toggle time format (just flips USER.settings.time_format)
  toggleFormatBtn.addEventListener('click', () => {
    USER.settings.time_format =
      USER.settings.time_format === '12hr' ? '24hr' : '12hr';
    console.log('Time format set to:', USER.settings.time_format);
  });


  // 4) Save updated settings
  document.getElementById('save-settings').addEventListener('click', () => {
    const updatedFields = {};
    const newAnimal   = document.querySelector('input[name="animal"]:checked')?.value;
    const newChar     = document.querySelector('input[name="character"]:checked')?.value;
    const newFormat   = USER.settings.time_format;
    const newSoundSettings = {
      birds: birdsSlider.value,
      cicadas: cicadasSlider.value,
      wind: windSlider.value,
    rain: rainSlider.value,
      fire: fireSlider.value
    }

    if (newAnimal && newAnimal !== USER.animal) {
      updatedFields.animal = newAnimal;
    }
    if (newChar && newChar !== USER.character) {
      updatedFields.character = newChar;
    }
    if (newFormat !== USER.settings.time_format) {
      updatedFields['settings.time_format'] = newFormat;
    }
    if (newSoundSettings !== USER.soundSettings) {
      updatedFields['soundSettings'] = newSoundSettings;
    }

    if (Object.keys(updatedFields).length === 0) {
      alert('No changes made.');
      return;
    }

    fetch('/updateUserSettings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedFields)
    })
    .then(res => res.json())
    .then(data => {
      alert('Settings updated!');
      window.location.reload();
    })
    .catch(err => {
      console.error('Update failed', err);
      alert('Failed to save settings.');
    });
  });
});
