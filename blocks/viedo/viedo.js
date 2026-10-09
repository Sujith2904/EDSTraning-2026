export default function decorate(block) {
  block.classList.add('viedo');

  [...block.children].forEach((row) => {
    const hasVideo = row.querySelector('video, iframe, picture, img');
    if (hasVideo) {
      row.classList.add('viedo-media');
      return;
    }

    row.classList.add('viedo-content');
  });
}
