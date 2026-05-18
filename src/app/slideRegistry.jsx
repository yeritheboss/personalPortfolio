import { Assistant } from '../sections/Assistant/Assistant'
import { Contact } from '../sections/Contact/Contact'
import { Education } from '../sections/Education/Education'
import { Experience } from '../sections/Experience/Experience'
import { Hero, Snapshot } from '../sections/Profile/Profile'
import { Projects } from '../sections/Projects/Projects'
import { Stack } from '../sections/Stack/Stack'
import { Value } from '../sections/Value/Value'

export function renderSlide(activeSlide, lang, t, onStartTour) {
  const slideProps = { lang, t }

  const slides = {
    assistant: <Assistant t={t} onStartTour={onStartTour} />,
    profile: (
      <>
        <Hero {...slideProps} />
        <Snapshot {...slideProps} />
      </>
    ),
    value: <Value {...slideProps} />,
    experience: <Experience {...slideProps} />,
    projects: <Projects {...slideProps} />,
    stack: <Stack {...slideProps} />,
    education: <Education {...slideProps} />,
    contact: <Contact {...slideProps} />,
  }

  return slides[activeSlide] ?? slides.contact
}
