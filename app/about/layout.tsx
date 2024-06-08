import style from './styles.module.css';

function layout({
 children,
}: {
 children: React.ReactNode
}) {
 return  (
  <>      
    <h1>layout from about</h1>
    <main className={style.main}>
     {children}
    </main>
  </>

    
  )
}

export default layout