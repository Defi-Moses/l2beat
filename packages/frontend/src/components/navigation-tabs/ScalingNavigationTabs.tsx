import React from 'react'

import { ActivityIcon, RiskIcon, SummaryIcon, TvlIcon } from '../icons'
import { DataAvailabilityIcon } from '../icons/pages/DataAvailabilityIcon'
import { FinalityIcon } from '../icons/pages/FinalityIcon'
import { L2CostsIcon } from '../icons/pages/L2CostsIcon'
import { LivenessIcon } from '../icons/pages/LivenessIcon'
import { NavigationPage, NavigationTabs } from './NavigationTabs'

interface ScalingNavigationTabsProps {
  selected:
    | 'summary'
    | 'detailed'
    | 'risk'
    | 'activity'
    | 'liveness'
    | 'finality'
    | 'data-availability'
    | 'l2-costs'
  showActivity: boolean
  showFinality: boolean
  showLiveness: boolean
}

export function ScalingNavigationTabs(props: ScalingNavigationTabsProps) {
  const pages: NavigationPage[] = [
    {
      fullTitle: 'Summary',
      shortTitle: 'Summary',
      icon: <SummaryIcon />,
      link: '/scaling/summary',
      selected: props.selected === 'summary',
    },
  ]
  pages.push({
    fullTitle: 'Value Locked',
    shortTitle: 'Value',
    icon: <TvlIcon />,
    link: '/scaling/tvl',
    selected: props.selected === 'detailed',
  })

  pages.push({
    fullTitle: 'Risk Analysis',
    shortTitle: 'Risks',
    icon: <RiskIcon />,
    link: '/scaling/risk',
    selected: props.selected === 'risk',
  })
  pages.push({
    fullTitle: 'DA',
    shortTitle: 'DA',
    icon: <DataAvailabilityIcon />,
    link: '/scaling/data-availability',
    selected: props.selected === 'data-availability',
  })
  if (props.showLiveness) {
    pages.push({
      fullTitle: 'Liveness',
      shortTitle: 'Liveness',
      icon: <LivenessIcon />,
      link: '/scaling/liveness',
      selected: props.selected === 'liveness',
    })
  }
  if (props.showFinality) {
    pages.push({
      fullTitle: 'Finality',
      shortTitle: 'Finality',
      icon: <FinalityIcon />,
      link: '/scaling/finality',
      selected: props.selected === 'finality',
    })
  }
  if (props.showActivity) {
    pages.push({
      fullTitle: 'Activity',
      shortTitle: 'Activity',
      icon: <ActivityIcon />,
      link: '/scaling/activity',
      selected: props.selected === 'activity',
    })
  }
  pages.push({
    fullTitle: 'L2 Costs',
    shortTitle: 'L2 Costs',
    icon: <L2CostsIcon />,
    link: '/scaling/l2-costs',
    selected: props.selected === 'l2-costs',
  })
  return <NavigationTabs pages={pages} />
}
