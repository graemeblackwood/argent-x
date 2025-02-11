import { logosDeprecated } from "@argent/x-ui"
import type { SquareProps } from "@chakra-ui/react"
import { Circle, Tooltip } from "@chakra-ui/react"
import type { FC } from "react"

const { LedgerLogo } = logosDeprecated

export const AccountListItemLedgerBadge: FC<SquareProps> = (props) => (
  <Tooltip label="Controlled by a Ledger">
    <Circle
      position={"absolute"}
      right={-0.5}
      bottom={-0.5}
      size={5}
      bg={"surface-elevated"}
      color={"text-primary"}
      fontSize={"3xs"}
      {...props}
    >
      <LedgerLogo />
    </Circle>
  </Tooltip>
)
