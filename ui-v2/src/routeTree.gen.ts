/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as VariablesImport } from './routes/variables'
import { Route as SettingsImport } from './routes/settings'
import { Route as EventsImport } from './routes/events'
import { Route as DashboardImport } from './routes/dashboard'
import { Route as BlocksImport } from './routes/blocks'
import { Route as IndexImport } from './routes/index'
import { Route as WorkPoolsIndexImport } from './routes/work-pools/index'
import { Route as RunsIndexImport } from './routes/runs/index'
import { Route as FlowsIndexImport } from './routes/flows/index'
import { Route as DeploymentsIndexImport } from './routes/deployments/index'
import { Route as ConcurrencyLimitsIndexImport } from './routes/concurrency-limits/index'
import { Route as BlocksIndexImport } from './routes/blocks/index'
import { Route as AutomationsIndexImport } from './routes/automations/index'
import { Route as ArtifactsIndexImport } from './routes/artifacts/index'
import { Route as WorkPoolsCreateImport } from './routes/work-pools/create'
import { Route as BlocksCatalogImport } from './routes/blocks/catalog'
import { Route as AutomationsCreateImport } from './routes/automations/create'
import { Route as WorkPoolsWorkPoolWorkPoolNameImport } from './routes/work-pools/work-pool.$workPoolName'
import { Route as RunsTaskRunIdImport } from './routes/runs/task-run.$id'
import { Route as RunsFlowRunIdImport } from './routes/runs/flow-run.$id'
import { Route as FlowsFlowIdImport } from './routes/flows/flow.$id'
import { Route as DeploymentsDeploymentIdImport } from './routes/deployments/deployment.$id'
import { Route as ConcurrencyLimitsConcurrencyLimitIdImport } from './routes/concurrency-limits/concurrency-limit.$id'
import { Route as BlocksBlockIdImport } from './routes/blocks/block.$id'
import { Route as AutomationsAutomationIdImport } from './routes/automations/automation.$id'
import { Route as ArtifactsKeyKeyImport } from './routes/artifacts/key.$key'
import { Route as ArtifactsArtifactIdImport } from './routes/artifacts/artifact.$id'
import { Route as DeploymentsDeploymentIdRunImport } from './routes/deployments/deployment_.$id.run'
import { Route as DeploymentsDeploymentIdEditImport } from './routes/deployments/deployment_.$id.edit'
import { Route as DeploymentsDeploymentIdDuplicateImport } from './routes/deployments/deployment_.$id.duplicate'
import { Route as AutomationsAutomationIdEditImport } from './routes/automations/automation.$id.edit'
import { Route as WorkPoolsWorkPoolWorkPoolNameQueueWorkQueueNameImport } from './routes/work-pools/work-pool.$workPoolName.queue.$workQueueName'

// Create/Update Routes

const VariablesRoute = VariablesImport.update({
  id: '/variables',
  path: '/variables',
  getParentRoute: () => rootRoute,
} as any)

const SettingsRoute = SettingsImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => rootRoute,
} as any)

const EventsRoute = EventsImport.update({
  id: '/events',
  path: '/events',
  getParentRoute: () => rootRoute,
} as any)

const DashboardRoute = DashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const BlocksRoute = BlocksImport.update({
  id: '/blocks',
  path: '/blocks',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const WorkPoolsIndexRoute = WorkPoolsIndexImport.update({
  id: '/work-pools/',
  path: '/work-pools/',
  getParentRoute: () => rootRoute,
} as any)

const RunsIndexRoute = RunsIndexImport.update({
  id: '/runs/',
  path: '/runs/',
  getParentRoute: () => rootRoute,
} as any)

const FlowsIndexRoute = FlowsIndexImport.update({
  id: '/flows/',
  path: '/flows/',
  getParentRoute: () => rootRoute,
} as any)

const DeploymentsIndexRoute = DeploymentsIndexImport.update({
  id: '/deployments/',
  path: '/deployments/',
  getParentRoute: () => rootRoute,
} as any)

const ConcurrencyLimitsIndexRoute = ConcurrencyLimitsIndexImport.update({
  id: '/concurrency-limits/',
  path: '/concurrency-limits/',
  getParentRoute: () => rootRoute,
} as any)

const BlocksIndexRoute = BlocksIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => BlocksRoute,
} as any)

const AutomationsIndexRoute = AutomationsIndexImport.update({
  id: '/automations/',
  path: '/automations/',
  getParentRoute: () => rootRoute,
} as any)

const ArtifactsIndexRoute = ArtifactsIndexImport.update({
  id: '/artifacts/',
  path: '/artifacts/',
  getParentRoute: () => rootRoute,
} as any)

const WorkPoolsCreateRoute = WorkPoolsCreateImport.update({
  id: '/work-pools/create',
  path: '/work-pools/create',
  getParentRoute: () => rootRoute,
} as any)

const BlocksCatalogRoute = BlocksCatalogImport.update({
  id: '/catalog',
  path: '/catalog',
  getParentRoute: () => BlocksRoute,
} as any)

const AutomationsCreateRoute = AutomationsCreateImport.update({
  id: '/automations/create',
  path: '/automations/create',
  getParentRoute: () => rootRoute,
} as any)

const WorkPoolsWorkPoolWorkPoolNameRoute =
  WorkPoolsWorkPoolWorkPoolNameImport.update({
    id: '/work-pools/work-pool/$workPoolName',
    path: '/work-pools/work-pool/$workPoolName',
    getParentRoute: () => rootRoute,
  } as any)

const RunsTaskRunIdRoute = RunsTaskRunIdImport.update({
  id: '/runs/task-run/$id',
  path: '/runs/task-run/$id',
  getParentRoute: () => rootRoute,
} as any)

const RunsFlowRunIdRoute = RunsFlowRunIdImport.update({
  id: '/runs/flow-run/$id',
  path: '/runs/flow-run/$id',
  getParentRoute: () => rootRoute,
} as any)

const FlowsFlowIdRoute = FlowsFlowIdImport.update({
  id: '/flows/flow/$id',
  path: '/flows/flow/$id',
  getParentRoute: () => rootRoute,
} as any)

const DeploymentsDeploymentIdRoute = DeploymentsDeploymentIdImport.update({
  id: '/deployments/deployment/$id',
  path: '/deployments/deployment/$id',
  getParentRoute: () => rootRoute,
} as any)

const ConcurrencyLimitsConcurrencyLimitIdRoute =
  ConcurrencyLimitsConcurrencyLimitIdImport.update({
    id: '/concurrency-limits/concurrency-limit/$id',
    path: '/concurrency-limits/concurrency-limit/$id',
    getParentRoute: () => rootRoute,
  } as any)

const BlocksBlockIdRoute = BlocksBlockIdImport.update({
  id: '/block/$id',
  path: '/block/$id',
  getParentRoute: () => BlocksRoute,
} as any)

const AutomationsAutomationIdRoute = AutomationsAutomationIdImport.update({
  id: '/automations/automation/$id',
  path: '/automations/automation/$id',
  getParentRoute: () => rootRoute,
} as any)

const ArtifactsKeyKeyRoute = ArtifactsKeyKeyImport.update({
  id: '/artifacts/key/$key',
  path: '/artifacts/key/$key',
  getParentRoute: () => rootRoute,
} as any)

const ArtifactsArtifactIdRoute = ArtifactsArtifactIdImport.update({
  id: '/artifacts/artifact/$id',
  path: '/artifacts/artifact/$id',
  getParentRoute: () => rootRoute,
} as any)

const DeploymentsDeploymentIdRunRoute = DeploymentsDeploymentIdRunImport.update(
  {
    id: '/deployments/deployment_/$id/run',
    path: '/deployments/deployment/$id/run',
    getParentRoute: () => rootRoute,
  } as any,
)

const DeploymentsDeploymentIdEditRoute =
  DeploymentsDeploymentIdEditImport.update({
    id: '/deployments/deployment_/$id/edit',
    path: '/deployments/deployment/$id/edit',
    getParentRoute: () => rootRoute,
  } as any)

const DeploymentsDeploymentIdDuplicateRoute =
  DeploymentsDeploymentIdDuplicateImport.update({
    id: '/deployments/deployment_/$id/duplicate',
    path: '/deployments/deployment/$id/duplicate',
    getParentRoute: () => rootRoute,
  } as any)

const AutomationsAutomationIdEditRoute =
  AutomationsAutomationIdEditImport.update({
    id: '/edit',
    path: '/edit',
    getParentRoute: () => AutomationsAutomationIdRoute,
  } as any)

const WorkPoolsWorkPoolWorkPoolNameQueueWorkQueueNameRoute =
  WorkPoolsWorkPoolWorkPoolNameQueueWorkQueueNameImport.update({
    id: '/queue/$workQueueName',
    path: '/queue/$workQueueName',
    getParentRoute: () => WorkPoolsWorkPoolWorkPoolNameRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/blocks': {
      id: '/blocks'
      path: '/blocks'
      fullPath: '/blocks'
      preLoaderRoute: typeof BlocksImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/events': {
      id: '/events'
      path: '/events'
      fullPath: '/events'
      preLoaderRoute: typeof EventsImport
      parentRoute: typeof rootRoute
    }
    '/settings': {
      id: '/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsImport
      parentRoute: typeof rootRoute
    }
    '/variables': {
      id: '/variables'
      path: '/variables'
      fullPath: '/variables'
      preLoaderRoute: typeof VariablesImport
      parentRoute: typeof rootRoute
    }
    '/automations/create': {
      id: '/automations/create'
      path: '/automations/create'
      fullPath: '/automations/create'
      preLoaderRoute: typeof AutomationsCreateImport
      parentRoute: typeof rootRoute
    }
    '/blocks/catalog': {
      id: '/blocks/catalog'
      path: '/catalog'
      fullPath: '/blocks/catalog'
      preLoaderRoute: typeof BlocksCatalogImport
      parentRoute: typeof BlocksImport
    }
    '/work-pools/create': {
      id: '/work-pools/create'
      path: '/work-pools/create'
      fullPath: '/work-pools/create'
      preLoaderRoute: typeof WorkPoolsCreateImport
      parentRoute: typeof rootRoute
    }
    '/artifacts/': {
      id: '/artifacts/'
      path: '/artifacts'
      fullPath: '/artifacts'
      preLoaderRoute: typeof ArtifactsIndexImport
      parentRoute: typeof rootRoute
    }
    '/automations/': {
      id: '/automations/'
      path: '/automations'
      fullPath: '/automations'
      preLoaderRoute: typeof AutomationsIndexImport
      parentRoute: typeof rootRoute
    }
    '/blocks/': {
      id: '/blocks/'
      path: '/'
      fullPath: '/blocks/'
      preLoaderRoute: typeof BlocksIndexImport
      parentRoute: typeof BlocksImport
    }
    '/concurrency-limits/': {
      id: '/concurrency-limits/'
      path: '/concurrency-limits'
      fullPath: '/concurrency-limits'
      preLoaderRoute: typeof ConcurrencyLimitsIndexImport
      parentRoute: typeof rootRoute
    }
    '/deployments/': {
      id: '/deployments/'
      path: '/deployments'
      fullPath: '/deployments'
      preLoaderRoute: typeof DeploymentsIndexImport
      parentRoute: typeof rootRoute
    }
    '/flows/': {
      id: '/flows/'
      path: '/flows'
      fullPath: '/flows'
      preLoaderRoute: typeof FlowsIndexImport
      parentRoute: typeof rootRoute
    }
    '/runs/': {
      id: '/runs/'
      path: '/runs'
      fullPath: '/runs'
      preLoaderRoute: typeof RunsIndexImport
      parentRoute: typeof rootRoute
    }
    '/work-pools/': {
      id: '/work-pools/'
      path: '/work-pools'
      fullPath: '/work-pools'
      preLoaderRoute: typeof WorkPoolsIndexImport
      parentRoute: typeof rootRoute
    }
    '/artifacts/artifact/$id': {
      id: '/artifacts/artifact/$id'
      path: '/artifacts/artifact/$id'
      fullPath: '/artifacts/artifact/$id'
      preLoaderRoute: typeof ArtifactsArtifactIdImport
      parentRoute: typeof rootRoute
    }
    '/artifacts/key/$key': {
      id: '/artifacts/key/$key'
      path: '/artifacts/key/$key'
      fullPath: '/artifacts/key/$key'
      preLoaderRoute: typeof ArtifactsKeyKeyImport
      parentRoute: typeof rootRoute
    }
    '/automations/automation/$id': {
      id: '/automations/automation/$id'
      path: '/automations/automation/$id'
      fullPath: '/automations/automation/$id'
      preLoaderRoute: typeof AutomationsAutomationIdImport
      parentRoute: typeof rootRoute
    }
    '/blocks/block/$id': {
      id: '/blocks/block/$id'
      path: '/block/$id'
      fullPath: '/blocks/block/$id'
      preLoaderRoute: typeof BlocksBlockIdImport
      parentRoute: typeof BlocksImport
    }
    '/concurrency-limits/concurrency-limit/$id': {
      id: '/concurrency-limits/concurrency-limit/$id'
      path: '/concurrency-limits/concurrency-limit/$id'
      fullPath: '/concurrency-limits/concurrency-limit/$id'
      preLoaderRoute: typeof ConcurrencyLimitsConcurrencyLimitIdImport
      parentRoute: typeof rootRoute
    }
    '/deployments/deployment/$id': {
      id: '/deployments/deployment/$id'
      path: '/deployments/deployment/$id'
      fullPath: '/deployments/deployment/$id'
      preLoaderRoute: typeof DeploymentsDeploymentIdImport
      parentRoute: typeof rootRoute
    }
    '/flows/flow/$id': {
      id: '/flows/flow/$id'
      path: '/flows/flow/$id'
      fullPath: '/flows/flow/$id'
      preLoaderRoute: typeof FlowsFlowIdImport
      parentRoute: typeof rootRoute
    }
    '/runs/flow-run/$id': {
      id: '/runs/flow-run/$id'
      path: '/runs/flow-run/$id'
      fullPath: '/runs/flow-run/$id'
      preLoaderRoute: typeof RunsFlowRunIdImport
      parentRoute: typeof rootRoute
    }
    '/runs/task-run/$id': {
      id: '/runs/task-run/$id'
      path: '/runs/task-run/$id'
      fullPath: '/runs/task-run/$id'
      preLoaderRoute: typeof RunsTaskRunIdImport
      parentRoute: typeof rootRoute
    }
    '/work-pools/work-pool/$workPoolName': {
      id: '/work-pools/work-pool/$workPoolName'
      path: '/work-pools/work-pool/$workPoolName'
      fullPath: '/work-pools/work-pool/$workPoolName'
      preLoaderRoute: typeof WorkPoolsWorkPoolWorkPoolNameImport
      parentRoute: typeof rootRoute
    }
    '/automations/automation/$id/edit': {
      id: '/automations/automation/$id/edit'
      path: '/edit'
      fullPath: '/automations/automation/$id/edit'
      preLoaderRoute: typeof AutomationsAutomationIdEditImport
      parentRoute: typeof AutomationsAutomationIdImport
    }
    '/deployments/deployment_/$id/duplicate': {
      id: '/deployments/deployment_/$id/duplicate'
      path: '/deployments/deployment/$id/duplicate'
      fullPath: '/deployments/deployment/$id/duplicate'
      preLoaderRoute: typeof DeploymentsDeploymentIdDuplicateImport
      parentRoute: typeof rootRoute
    }
    '/deployments/deployment_/$id/edit': {
      id: '/deployments/deployment_/$id/edit'
      path: '/deployments/deployment/$id/edit'
      fullPath: '/deployments/deployment/$id/edit'
      preLoaderRoute: typeof DeploymentsDeploymentIdEditImport
      parentRoute: typeof rootRoute
    }
    '/deployments/deployment_/$id/run': {
      id: '/deployments/deployment_/$id/run'
      path: '/deployments/deployment/$id/run'
      fullPath: '/deployments/deployment/$id/run'
      preLoaderRoute: typeof DeploymentsDeploymentIdRunImport
      parentRoute: typeof rootRoute
    }
    '/work-pools/work-pool/$workPoolName/queue/$workQueueName': {
      id: '/work-pools/work-pool/$workPoolName/queue/$workQueueName'
      path: '/queue/$workQueueName'
      fullPath: '/work-pools/work-pool/$workPoolName/queue/$workQueueName'
      preLoaderRoute: typeof WorkPoolsWorkPoolWorkPoolNameQueueWorkQueueNameImport
      parentRoute: typeof WorkPoolsWorkPoolWorkPoolNameImport
    }
  }
}

// Create and export the route tree

interface BlocksRouteChildren {
  BlocksCatalogRoute: typeof BlocksCatalogRoute
  BlocksIndexRoute: typeof BlocksIndexRoute
  BlocksBlockIdRoute: typeof BlocksBlockIdRoute
}

const BlocksRouteChildren: BlocksRouteChildren = {
  BlocksCatalogRoute: BlocksCatalogRoute,
  BlocksIndexRoute: BlocksIndexRoute,
  BlocksBlockIdRoute: BlocksBlockIdRoute,
}

const BlocksRouteWithChildren =
  BlocksRoute._addFileChildren(BlocksRouteChildren)

interface AutomationsAutomationIdRouteChildren {
  AutomationsAutomationIdEditRoute: typeof AutomationsAutomationIdEditRoute
}

const AutomationsAutomationIdRouteChildren: AutomationsAutomationIdRouteChildren =
  {
    AutomationsAutomationIdEditRoute: AutomationsAutomationIdEditRoute,
  }

const AutomationsAutomationIdRouteWithChildren =
  AutomationsAutomationIdRoute._addFileChildren(
    AutomationsAutomationIdRouteChildren,
  )

interface WorkPoolsWorkPoolWorkPoolNameRouteChildren {
  WorkPoolsWorkPoolWorkPoolNameQueueWorkQueueNameRoute: typeof WorkPoolsWorkPoolWorkPoolNameQueueWorkQueueNameRoute
}

const WorkPoolsWorkPoolWorkPoolNameRouteChildren: WorkPoolsWorkPoolWorkPoolNameRouteChildren =
  {
    WorkPoolsWorkPoolWorkPoolNameQueueWorkQueueNameRoute:
      WorkPoolsWorkPoolWorkPoolNameQueueWorkQueueNameRoute,
  }

const WorkPoolsWorkPoolWorkPoolNameRouteWithChildren =
  WorkPoolsWorkPoolWorkPoolNameRoute._addFileChildren(
    WorkPoolsWorkPoolWorkPoolNameRouteChildren,
  )

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/blocks': typeof BlocksRouteWithChildren
  '/dashboard': typeof DashboardRoute
  '/events': typeof EventsRoute
  '/settings': typeof SettingsRoute
  '/variables': typeof VariablesRoute
  '/automations/create': typeof AutomationsCreateRoute
  '/blocks/catalog': typeof BlocksCatalogRoute
  '/work-pools/create': typeof WorkPoolsCreateRoute
  '/artifacts': typeof ArtifactsIndexRoute
  '/automations': typeof AutomationsIndexRoute
  '/blocks/': typeof BlocksIndexRoute
  '/concurrency-limits': typeof ConcurrencyLimitsIndexRoute
  '/deployments': typeof DeploymentsIndexRoute
  '/flows': typeof FlowsIndexRoute
  '/runs': typeof RunsIndexRoute
  '/work-pools': typeof WorkPoolsIndexRoute
  '/artifacts/artifact/$id': typeof ArtifactsArtifactIdRoute
  '/artifacts/key/$key': typeof ArtifactsKeyKeyRoute
  '/automations/automation/$id': typeof AutomationsAutomationIdRouteWithChildren
  '/blocks/block/$id': typeof BlocksBlockIdRoute
  '/concurrency-limits/concurrency-limit/$id': typeof ConcurrencyLimitsConcurrencyLimitIdRoute
  '/deployments/deployment/$id': typeof DeploymentsDeploymentIdRoute
  '/flows/flow/$id': typeof FlowsFlowIdRoute
  '/runs/flow-run/$id': typeof RunsFlowRunIdRoute
  '/runs/task-run/$id': typeof RunsTaskRunIdRoute
  '/work-pools/work-pool/$workPoolName': typeof WorkPoolsWorkPoolWorkPoolNameRouteWithChildren
  '/automations/automation/$id/edit': typeof AutomationsAutomationIdEditRoute
  '/deployments/deployment/$id/duplicate': typeof DeploymentsDeploymentIdDuplicateRoute
  '/deployments/deployment/$id/edit': typeof DeploymentsDeploymentIdEditRoute
  '/deployments/deployment/$id/run': typeof DeploymentsDeploymentIdRunRoute
  '/work-pools/work-pool/$workPoolName/queue/$workQueueName': typeof WorkPoolsWorkPoolWorkPoolNameQueueWorkQueueNameRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRoute
  '/events': typeof EventsRoute
  '/settings': typeof SettingsRoute
  '/variables': typeof VariablesRoute
  '/automations/create': typeof AutomationsCreateRoute
  '/blocks/catalog': typeof BlocksCatalogRoute
  '/work-pools/create': typeof WorkPoolsCreateRoute
  '/artifacts': typeof ArtifactsIndexRoute
  '/automations': typeof AutomationsIndexRoute
  '/blocks': typeof BlocksIndexRoute
  '/concurrency-limits': typeof ConcurrencyLimitsIndexRoute
  '/deployments': typeof DeploymentsIndexRoute
  '/flows': typeof FlowsIndexRoute
  '/runs': typeof RunsIndexRoute
  '/work-pools': typeof WorkPoolsIndexRoute
  '/artifacts/artifact/$id': typeof ArtifactsArtifactIdRoute
  '/artifacts/key/$key': typeof ArtifactsKeyKeyRoute
  '/automations/automation/$id': typeof AutomationsAutomationIdRouteWithChildren
  '/blocks/block/$id': typeof BlocksBlockIdRoute
  '/concurrency-limits/concurrency-limit/$id': typeof ConcurrencyLimitsConcurrencyLimitIdRoute
  '/deployments/deployment/$id': typeof DeploymentsDeploymentIdRoute
  '/flows/flow/$id': typeof FlowsFlowIdRoute
  '/runs/flow-run/$id': typeof RunsFlowRunIdRoute
  '/runs/task-run/$id': typeof RunsTaskRunIdRoute
  '/work-pools/work-pool/$workPoolName': typeof WorkPoolsWorkPoolWorkPoolNameRouteWithChildren
  '/automations/automation/$id/edit': typeof AutomationsAutomationIdEditRoute
  '/deployments/deployment/$id/duplicate': typeof DeploymentsDeploymentIdDuplicateRoute
  '/deployments/deployment/$id/edit': typeof DeploymentsDeploymentIdEditRoute
  '/deployments/deployment/$id/run': typeof DeploymentsDeploymentIdRunRoute
  '/work-pools/work-pool/$workPoolName/queue/$workQueueName': typeof WorkPoolsWorkPoolWorkPoolNameQueueWorkQueueNameRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/blocks': typeof BlocksRouteWithChildren
  '/dashboard': typeof DashboardRoute
  '/events': typeof EventsRoute
  '/settings': typeof SettingsRoute
  '/variables': typeof VariablesRoute
  '/automations/create': typeof AutomationsCreateRoute
  '/blocks/catalog': typeof BlocksCatalogRoute
  '/work-pools/create': typeof WorkPoolsCreateRoute
  '/artifacts/': typeof ArtifactsIndexRoute
  '/automations/': typeof AutomationsIndexRoute
  '/blocks/': typeof BlocksIndexRoute
  '/concurrency-limits/': typeof ConcurrencyLimitsIndexRoute
  '/deployments/': typeof DeploymentsIndexRoute
  '/flows/': typeof FlowsIndexRoute
  '/runs/': typeof RunsIndexRoute
  '/work-pools/': typeof WorkPoolsIndexRoute
  '/artifacts/artifact/$id': typeof ArtifactsArtifactIdRoute
  '/artifacts/key/$key': typeof ArtifactsKeyKeyRoute
  '/automations/automation/$id': typeof AutomationsAutomationIdRouteWithChildren
  '/blocks/block/$id': typeof BlocksBlockIdRoute
  '/concurrency-limits/concurrency-limit/$id': typeof ConcurrencyLimitsConcurrencyLimitIdRoute
  '/deployments/deployment/$id': typeof DeploymentsDeploymentIdRoute
  '/flows/flow/$id': typeof FlowsFlowIdRoute
  '/runs/flow-run/$id': typeof RunsFlowRunIdRoute
  '/runs/task-run/$id': typeof RunsTaskRunIdRoute
  '/work-pools/work-pool/$workPoolName': typeof WorkPoolsWorkPoolWorkPoolNameRouteWithChildren
  '/automations/automation/$id/edit': typeof AutomationsAutomationIdEditRoute
  '/deployments/deployment_/$id/duplicate': typeof DeploymentsDeploymentIdDuplicateRoute
  '/deployments/deployment_/$id/edit': typeof DeploymentsDeploymentIdEditRoute
  '/deployments/deployment_/$id/run': typeof DeploymentsDeploymentIdRunRoute
  '/work-pools/work-pool/$workPoolName/queue/$workQueueName': typeof WorkPoolsWorkPoolWorkPoolNameQueueWorkQueueNameRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/blocks'
    | '/dashboard'
    | '/events'
    | '/settings'
    | '/variables'
    | '/automations/create'
    | '/blocks/catalog'
    | '/work-pools/create'
    | '/artifacts'
    | '/automations'
    | '/blocks/'
    | '/concurrency-limits'
    | '/deployments'
    | '/flows'
    | '/runs'
    | '/work-pools'
    | '/artifacts/artifact/$id'
    | '/artifacts/key/$key'
    | '/automations/automation/$id'
    | '/blocks/block/$id'
    | '/concurrency-limits/concurrency-limit/$id'
    | '/deployments/deployment/$id'
    | '/flows/flow/$id'
    | '/runs/flow-run/$id'
    | '/runs/task-run/$id'
    | '/work-pools/work-pool/$workPoolName'
    | '/automations/automation/$id/edit'
    | '/deployments/deployment/$id/duplicate'
    | '/deployments/deployment/$id/edit'
    | '/deployments/deployment/$id/run'
    | '/work-pools/work-pool/$workPoolName/queue/$workQueueName'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/dashboard'
    | '/events'
    | '/settings'
    | '/variables'
    | '/automations/create'
    | '/blocks/catalog'
    | '/work-pools/create'
    | '/artifacts'
    | '/automations'
    | '/blocks'
    | '/concurrency-limits'
    | '/deployments'
    | '/flows'
    | '/runs'
    | '/work-pools'
    | '/artifacts/artifact/$id'
    | '/artifacts/key/$key'
    | '/automations/automation/$id'
    | '/blocks/block/$id'
    | '/concurrency-limits/concurrency-limit/$id'
    | '/deployments/deployment/$id'
    | '/flows/flow/$id'
    | '/runs/flow-run/$id'
    | '/runs/task-run/$id'
    | '/work-pools/work-pool/$workPoolName'
    | '/automations/automation/$id/edit'
    | '/deployments/deployment/$id/duplicate'
    | '/deployments/deployment/$id/edit'
    | '/deployments/deployment/$id/run'
    | '/work-pools/work-pool/$workPoolName/queue/$workQueueName'
  id:
    | '__root__'
    | '/'
    | '/blocks'
    | '/dashboard'
    | '/events'
    | '/settings'
    | '/variables'
    | '/automations/create'
    | '/blocks/catalog'
    | '/work-pools/create'
    | '/artifacts/'
    | '/automations/'
    | '/blocks/'
    | '/concurrency-limits/'
    | '/deployments/'
    | '/flows/'
    | '/runs/'
    | '/work-pools/'
    | '/artifacts/artifact/$id'
    | '/artifacts/key/$key'
    | '/automations/automation/$id'
    | '/blocks/block/$id'
    | '/concurrency-limits/concurrency-limit/$id'
    | '/deployments/deployment/$id'
    | '/flows/flow/$id'
    | '/runs/flow-run/$id'
    | '/runs/task-run/$id'
    | '/work-pools/work-pool/$workPoolName'
    | '/automations/automation/$id/edit'
    | '/deployments/deployment_/$id/duplicate'
    | '/deployments/deployment_/$id/edit'
    | '/deployments/deployment_/$id/run'
    | '/work-pools/work-pool/$workPoolName/queue/$workQueueName'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  BlocksRoute: typeof BlocksRouteWithChildren
  DashboardRoute: typeof DashboardRoute
  EventsRoute: typeof EventsRoute
  SettingsRoute: typeof SettingsRoute
  VariablesRoute: typeof VariablesRoute
  AutomationsCreateRoute: typeof AutomationsCreateRoute
  WorkPoolsCreateRoute: typeof WorkPoolsCreateRoute
  ArtifactsIndexRoute: typeof ArtifactsIndexRoute
  AutomationsIndexRoute: typeof AutomationsIndexRoute
  ConcurrencyLimitsIndexRoute: typeof ConcurrencyLimitsIndexRoute
  DeploymentsIndexRoute: typeof DeploymentsIndexRoute
  FlowsIndexRoute: typeof FlowsIndexRoute
  RunsIndexRoute: typeof RunsIndexRoute
  WorkPoolsIndexRoute: typeof WorkPoolsIndexRoute
  ArtifactsArtifactIdRoute: typeof ArtifactsArtifactIdRoute
  ArtifactsKeyKeyRoute: typeof ArtifactsKeyKeyRoute
  AutomationsAutomationIdRoute: typeof AutomationsAutomationIdRouteWithChildren
  ConcurrencyLimitsConcurrencyLimitIdRoute: typeof ConcurrencyLimitsConcurrencyLimitIdRoute
  DeploymentsDeploymentIdRoute: typeof DeploymentsDeploymentIdRoute
  FlowsFlowIdRoute: typeof FlowsFlowIdRoute
  RunsFlowRunIdRoute: typeof RunsFlowRunIdRoute
  RunsTaskRunIdRoute: typeof RunsTaskRunIdRoute
  WorkPoolsWorkPoolWorkPoolNameRoute: typeof WorkPoolsWorkPoolWorkPoolNameRouteWithChildren
  DeploymentsDeploymentIdDuplicateRoute: typeof DeploymentsDeploymentIdDuplicateRoute
  DeploymentsDeploymentIdEditRoute: typeof DeploymentsDeploymentIdEditRoute
  DeploymentsDeploymentIdRunRoute: typeof DeploymentsDeploymentIdRunRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  BlocksRoute: BlocksRouteWithChildren,
  DashboardRoute: DashboardRoute,
  EventsRoute: EventsRoute,
  SettingsRoute: SettingsRoute,
  VariablesRoute: VariablesRoute,
  AutomationsCreateRoute: AutomationsCreateRoute,
  WorkPoolsCreateRoute: WorkPoolsCreateRoute,
  ArtifactsIndexRoute: ArtifactsIndexRoute,
  AutomationsIndexRoute: AutomationsIndexRoute,
  ConcurrencyLimitsIndexRoute: ConcurrencyLimitsIndexRoute,
  DeploymentsIndexRoute: DeploymentsIndexRoute,
  FlowsIndexRoute: FlowsIndexRoute,
  RunsIndexRoute: RunsIndexRoute,
  WorkPoolsIndexRoute: WorkPoolsIndexRoute,
  ArtifactsArtifactIdRoute: ArtifactsArtifactIdRoute,
  ArtifactsKeyKeyRoute: ArtifactsKeyKeyRoute,
  AutomationsAutomationIdRoute: AutomationsAutomationIdRouteWithChildren,
  ConcurrencyLimitsConcurrencyLimitIdRoute:
    ConcurrencyLimitsConcurrencyLimitIdRoute,
  DeploymentsDeploymentIdRoute: DeploymentsDeploymentIdRoute,
  FlowsFlowIdRoute: FlowsFlowIdRoute,
  RunsFlowRunIdRoute: RunsFlowRunIdRoute,
  RunsTaskRunIdRoute: RunsTaskRunIdRoute,
  WorkPoolsWorkPoolWorkPoolNameRoute:
    WorkPoolsWorkPoolWorkPoolNameRouteWithChildren,
  DeploymentsDeploymentIdDuplicateRoute: DeploymentsDeploymentIdDuplicateRoute,
  DeploymentsDeploymentIdEditRoute: DeploymentsDeploymentIdEditRoute,
  DeploymentsDeploymentIdRunRoute: DeploymentsDeploymentIdRunRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/blocks",
        "/dashboard",
        "/events",
        "/settings",
        "/variables",
        "/automations/create",
        "/work-pools/create",
        "/artifacts/",
        "/automations/",
        "/concurrency-limits/",
        "/deployments/",
        "/flows/",
        "/runs/",
        "/work-pools/",
        "/artifacts/artifact/$id",
        "/artifacts/key/$key",
        "/automations/automation/$id",
        "/concurrency-limits/concurrency-limit/$id",
        "/deployments/deployment/$id",
        "/flows/flow/$id",
        "/runs/flow-run/$id",
        "/runs/task-run/$id",
        "/work-pools/work-pool/$workPoolName",
        "/deployments/deployment_/$id/duplicate",
        "/deployments/deployment_/$id/edit",
        "/deployments/deployment_/$id/run"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/blocks": {
      "filePath": "blocks.tsx",
      "children": [
        "/blocks/catalog",
        "/blocks/",
        "/blocks/block/$id"
      ]
    },
    "/dashboard": {
      "filePath": "dashboard.tsx"
    },
    "/events": {
      "filePath": "events.tsx"
    },
    "/settings": {
      "filePath": "settings.tsx"
    },
    "/variables": {
      "filePath": "variables.tsx"
    },
    "/automations/create": {
      "filePath": "automations/create.ts"
    },
    "/blocks/catalog": {
      "filePath": "blocks/catalog.tsx",
      "parent": "/blocks"
    },
    "/work-pools/create": {
      "filePath": "work-pools/create.tsx"
    },
    "/artifacts/": {
      "filePath": "artifacts/index.tsx"
    },
    "/automations/": {
      "filePath": "automations/index.ts"
    },
    "/blocks/": {
      "filePath": "blocks/index.tsx",
      "parent": "/blocks"
    },
    "/concurrency-limits/": {
      "filePath": "concurrency-limits/index.tsx"
    },
    "/deployments/": {
      "filePath": "deployments/index.tsx"
    },
    "/flows/": {
      "filePath": "flows/index.tsx"
    },
    "/runs/": {
      "filePath": "runs/index.tsx"
    },
    "/work-pools/": {
      "filePath": "work-pools/index.tsx"
    },
    "/artifacts/artifact/$id": {
      "filePath": "artifacts/artifact.$id.tsx"
    },
    "/artifacts/key/$key": {
      "filePath": "artifacts/key.$key.tsx"
    },
    "/automations/automation/$id": {
      "filePath": "automations/automation.$id.tsx",
      "children": [
        "/automations/automation/$id/edit"
      ]
    },
    "/blocks/block/$id": {
      "filePath": "blocks/block.$id.tsx",
      "parent": "/blocks"
    },
    "/concurrency-limits/concurrency-limit/$id": {
      "filePath": "concurrency-limits/concurrency-limit.$id.tsx"
    },
    "/deployments/deployment/$id": {
      "filePath": "deployments/deployment.$id.tsx"
    },
    "/flows/flow/$id": {
      "filePath": "flows/flow.$id.tsx"
    },
    "/runs/flow-run/$id": {
      "filePath": "runs/flow-run.$id.tsx"
    },
    "/runs/task-run/$id": {
      "filePath": "runs/task-run.$id.tsx"
    },
    "/work-pools/work-pool/$workPoolName": {
      "filePath": "work-pools/work-pool.$workPoolName.tsx",
      "children": [
        "/work-pools/work-pool/$workPoolName/queue/$workQueueName"
      ]
    },
    "/automations/automation/$id/edit": {
      "filePath": "automations/automation.$id.edit.ts",
      "parent": "/automations/automation/$id"
    },
    "/deployments/deployment_/$id/duplicate": {
      "filePath": "deployments/deployment_.$id.duplicate.tsx"
    },
    "/deployments/deployment_/$id/edit": {
      "filePath": "deployments/deployment_.$id.edit.tsx"
    },
    "/deployments/deployment_/$id/run": {
      "filePath": "deployments/deployment_.$id.run.tsx"
    },
    "/work-pools/work-pool/$workPoolName/queue/$workQueueName": {
      "filePath": "work-pools/work-pool.$workPoolName.queue.$workQueueName.tsx",
      "parent": "/work-pools/work-pool/$workPoolName"
    }
  }
}
ROUTE_MANIFEST_END */
