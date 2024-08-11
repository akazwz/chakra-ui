import type { Meta } from "@storybook/react"
import { Toaster } from "compositions/ui/toaster"
import { Box } from "../src"

export default {
  title: "Components / Toast",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
        <Toaster />
      </Box>
    ),
  ],
} satisfies Meta

export { ToasterBasic as Basic } from "compositions/examples/toaster-basic"
export { ToasterLifecycle as Lifecycle } from "compositions/examples/toaster-lifecycle"
export { ToasterPersistent as Persistent } from "compositions/examples/toaster-persistent"
export { ToasterStatic as Static } from "compositions/examples/toaster-static"
export { ToasterWithAction as WithAction } from "compositions/examples/toaster-with-action"
export { ToasterWithDuration as WithDuration } from "compositions/examples/toaster-with-duration"
export { ToasterWithExternalClose as ExternalClose } from "compositions/examples/toaster-with-external-close"
export { ToasterWithPromise as WithPromise } from "compositions/examples/toaster-with-promise"
export { ToasterWithStatus as WithStatus } from "compositions/examples/toaster-with-status"
export { ToasterWithUpdate as WithUpdate } from "compositions/examples/toaster-with-update"
