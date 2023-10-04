function formatPadLeft(content, count, padstr) {
    count = count || 2
    padstr = padstr || "0"

    content = String(content)

    return content.padStart(count, padstr)
}