import type { FC } from "react"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

import { routes } from "../../../shared/ui/routes"
import { OnboardingStartScreen } from "./OnboardingStartScreen"
import { ampli } from "../../../shared/analytics"
import { IS_DEV } from "../../../shared/utils/dev"

export const OnboardingStartScreenContainer: FC = () => {
  const navigate = useNavigate()
  const onCreate = useCallback(() => {
    ampli.onboardingStarted({
      "wallet platform": "browser extension",
    })
    if (IS_DEV) {
      void navigate(routes.onboardingPassword())
    } else {
      void navigate(routes.onboardingPrivacy("password"))
    }
  }, [navigate])

  const onRestore = useCallback(() => {
    if (IS_DEV) {
      void navigate(routes.onboardingRestoreSeed())
    } else {
      void navigate(routes.onboardingPrivacy("seedphrase"))
    }
  }, [navigate])

  const onRestorePreset = useCallback(() => {
    void navigate(routes.onboardingRestoreSeed(), {
      state: {
        seed: process.env.PRESET_SEED,
      },
    })
  }, [navigate])

  return (
    <OnboardingStartScreen
      onCreate={onCreate}
      onRestore={onRestore}
      onRestorePreset={onRestorePreset}
    />
  )
}
