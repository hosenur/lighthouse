import BunIcon from './bun'
import LinuxIcon from './linux'
import NodeIcon from './node'
import WindowsIcon from './windows'

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
