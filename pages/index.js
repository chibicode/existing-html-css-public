export default function Home() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
    <div class="foo">Hello World</div>
    <script>
      document.querySelector('.foo').style = 'color: red;'
    </script>
  `
      }}
    />
  )
}
