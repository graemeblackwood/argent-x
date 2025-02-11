import { icons } from "@argent/x-ui"
import { Circle, Tooltip } from "@chakra-ui/react"
import type { FC } from "react"

import { getEscapeDisplayAttributes } from "../smartAccount/escape/getEscapeDisplayAttributes"
import type { LiveAccountEscapeProps } from "../smartAccount/escape/useAccountEscape"

const { ShieldSecondaryIcon } = icons

interface AccountListItemSmartAccountBadgeProps {
  liveAccountEscape?: LiveAccountEscapeProps
}

export const AccountListItemSmartAccountBadge: FC<
  AccountListItemSmartAccountBadgeProps
> = ({ liveAccountEscape }) => {
  if (liveAccountEscape) {
    const { colorScheme, title } = getEscapeDisplayAttributes(liveAccountEscape)
    return (
      <Tooltip label={title}>
        <Circle
          position={"absolute"}
          right={-0.5}
          bottom={-0.5}
          size={5}
          bg={`${colorScheme}.500`}
          border={"2px solid"}
          borderColor={"neutrals.800"}
          color={"neutrals.900"}
          fontSize={"2xs"}
        >
          <ShieldSecondaryIcon />
        </Circle>
      </Tooltip>
    )
  }
  return (
    <Tooltip label="This is a Smart Account and is protected by 2FA">
      <Circle
        position={"absolute"}
        right={-0.5}
        bottom={-0.5}
        size={5}
        bg={"neutrals.800"}
        color={"white"}
        fontSize={"2xs"}
        data-testid="smart-account-on-settings"
      >
        <ShieldSecondaryIcon />
      </Circle>
    </Tooltip>
  )
}
