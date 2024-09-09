import React from 'react'
import NodeIcon from './node'
import BunIcon from './bun'
import WindowsIcon from './windows'
import LinuxIcon from './linux'

export default function Icon({ name }: { name: string }) {
    switch (name) {
        case 'node':
            return <NodeIcon />
        case 'bun':
            return <BunIcon />
        case 'Windows_NT':
            return <WindowsIcon />
        case 'Linux':
            return <LinuxIcon />
        default:
            return <NodeIcon />
    }
}
