/* @flow */

import AutoLayout from "./AutoLayout"
import Columns from "../../models/Columns"

describe("AutoLayout", () => {
  const columns = new Columns([
    {td: "1", name: "_path", type: "string", width: 22, isVisible: true},
    {td: "1", name: "duration", type: "interval", width: 44, isVisible: true},
    {td: "1", name: "query", type: "string", width: 55, isVisible: true}
  ])

  const autoLayout = new AutoLayout({
    height: 500,
    width: 960,
    rowH: 10,
    size: 200,
    columns
  })

  test("#viewHeight ", () => {
    expect(autoLayout.viewHeight()).toBe(500)
  })

  test("#viewWidth", () => {
    expect(autoLayout.viewWidth()).toBe(960)
  })

  test("#listHeight", () => {
    expect(autoLayout.listHeight()).toBe(2000)
  })

  test("#listWidth", () => {
    expect(autoLayout.listWidth()).toBe("auto")
  })

  test("#rowHeight", () => {
    expect(autoLayout.rowHeight()).toBe(10)
  })

  test("#cellHeight ", () => {
    expect(autoLayout.cellHeight()).toBe(10)
  })

  test("#cellWidth", () => {
    expect(autoLayout.cellWidth("a")).toBe("auto")
  })
})

import FixedLayout from "./FixedLayout"

describe("FixedLayout", () => {
  const columns = new Columns([
    {td: "1", name: "_path", type: "string", width: 22, isVisible: true},
    {td: "1", name: "duration", type: "interval", width: 44, isVisible: true},
    {td: "1", name: "history", type: "string", width: 55, isVisible: true}
  ])

  const fixedLayout = new FixedLayout({
    height: 500,
    width: 100,
    rowH: 10,
    size: 200,
    columns
  })

  test("#viewHeight", () => {
    expect(fixedLayout.viewHeight()).toBe(490)
  })

  test("#listWidth when sum of column widths > width", () => {
    fixedLayout.width = 10
    expect(fixedLayout.listWidth()).toBe(121)
    expect(fixedLayout.rowWidth()).toBe(121)
  })

  test("#listWidth ", () => {
    fixedLayout.width = 500
    expect(fixedLayout.listWidth()).toBe(500)
    expect(fixedLayout.rowWidth()).toBe(500)
  })

  test("#rowWidth is same as listWidth", () => {
    fixedLayout.width = 100
    expect(fixedLayout.rowWidth()).toBe(121)
  })

  test("#cellWidth", () => {
    expect(fixedLayout.cellWidth("_path")).toBe(22)
  })
})