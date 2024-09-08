import {
    IconBell,
    IconBook,
    IconBrandJustd,
    IconChevronLgDown,
    IconCirclePerson,
    IconCreditCard,
    IconDashboard,
    IconEnvelope,
    IconLogout,
    IconMessage,
    IconSearch,
    IconSettings,
    IconShield,
    IconSupport
} from "justd-icons"
import React from "react"
import { Aside } from "~/components/ui/aside"
import { Avatar } from "~/components/ui/avatar"
import { Button } from "~/components/ui/button"
import { Link } from "~/components/ui/link"
import { Menu } from "~/components/ui/menu"

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <Aside.Layout
            navbar={
                <Aside.Responsive>
                    <Button aria-label="Inbox" appearance="plain" shape="circle" size="square-petite">
                        <IconBell />
                    </Button>
                    <Button aria-label="Search" appearance="plain" shape="circle" size="square-petite">
                        <IconSearch />
                    </Button>
                    <Menu>
                        <Button
                            appearance="plain"
                            size="square-petite"
                            shape="circle"
                            aria-label="Profile"
                            className="group"
                        >
                            <Avatar size="medium" src="https://github.com/irsyadadl.png" />
                        </Button>
                        <Menu.Content placement="top" className="min-w-[--trigger-width]">
                            <Menu.Item href="#">
                                <IconCirclePerson />
                                Profile
                            </Menu.Item>
                            <Menu.Item href="#">
                                <IconSettings />
                                Settings
                            </Menu.Item>
                            <Menu.Item href="#">
                                <IconShield />
                                Security
                            </Menu.Item>
                            <Menu.Separator />
                            <Menu.Item href="#">
                                <IconBook />
                                Documentation
                            </Menu.Item>
                            <Menu.Item href="#">
                                <IconSupport />
                                Contact Support
                            </Menu.Item>
                            <Menu.Separator />
                            <Menu.Item href="#">
                                <IconLogout />
                                Log out
                            </Menu.Item>
                        </Menu.Content>
                    </Menu>
                </Aside.Responsive>
            }
            aside={
                <>
                    <Aside.Header>
                        <Link className="flex items-center gap-x-2" href="#">
                            <IconBrandJustd />
                            <strong>Justd</strong>
                        </Link>
                    </Aside.Header>
                    <Aside.Content>
                        <Aside.Section>
                            <Aside.Item isCurrent icon={IconDashboard} href="#">
                                Overview
                            </Aside.Item>
                            <Aside.Item icon={IconSettings} href="#">
                                Settings
                            </Aside.Item>
                            <Aside.Item icon={IconCreditCard} href="#">
                                Billing
                            </Aside.Item>
                            <Aside.Item icon={IconEnvelope} href="#" badge="49.67K">
                                Newsletter
                            </Aside.Item>
                            <Aside.Item icon={IconMessage} href="#" badge={35}>
                                Messages
                            </Aside.Item>
                        </Aside.Section>
                    </Aside.Content>
                    <Aside.Footer className="lg:flex lg:flex-row hidden items-center">
                        <Menu>
                            <Button
                                appearance="plain"
                                aria-label="Profile"
                                className="group w-full justify-start flex"
                            >
                                <Avatar
                                    size="extra-small"
                                    shape="square"
                                    className="-ml-1.5"
                                    src="https://github.com/irsyadadl.png"
                                />
                                Irsyad A. Panjaitan
                                <IconChevronLgDown className="right-3 absolute group-pressed:rotate-180 transition-transform" />
                            </Button>
                            <Menu.Content placement="top" className="min-w-[--trigger-width]">
                                <Menu.Item href="#">
                                    <IconCirclePerson />
                                    Profile
                                </Menu.Item>
                                <Menu.Item href="#">
                                    <IconSettings />
                                    Settings
                                </Menu.Item>
                                <Menu.Item href="#">
                                    <IconShield />
                                    Security
                                </Menu.Item>
                                <Menu.Separator />
                                <Menu.Separator />
                                <Menu.Item href="#">
                                    <IconLogout />
                                    Log out
                                </Menu.Item>
                            </Menu.Content>
                        </Menu>
                    </Aside.Footer>
                </>
            }
        >
            <main className="relative">{children}</main>
        </Aside.Layout>
    )
}
