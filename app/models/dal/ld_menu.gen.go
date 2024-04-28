// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package dal

import (
	"context"

	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"gorm.io/gorm/schema"

	"gorm.io/gen"
	"gorm.io/gen/field"

	"gorm.io/plugin/dbresolver"

	"go-zero-single/app/models/models"
)

func newLdMenu(db *gorm.DB, opts ...gen.DOOption) ldMenu {
	_ldMenu := ldMenu{}

	_ldMenu.ldMenuDo.UseDB(db, opts...)
	_ldMenu.ldMenuDo.UseModel(&models.LdMenu{})

	tableName := _ldMenu.ldMenuDo.TableName()
	_ldMenu.ALL = field.NewAsterisk(tableName)
	_ldMenu.ID = field.NewInt64(tableName, "id")
	_ldMenu.ParentMenuID = field.NewInt64(tableName, "parent_menu_id")
	_ldMenu.MenuIcon = field.NewString(tableName, "menu_icon")
	_ldMenu.MenuName = field.NewString(tableName, "menu_name")
	_ldMenu.MenuSort = field.NewInt32(tableName, "menu_sort")
	_ldMenu.MenuTarget = field.NewString(tableName, "menu_target")
	_ldMenu.MenuURL = field.NewString(tableName, "menu_url")

	_ldMenu.fillFieldMap()

	return _ldMenu
}

// ldMenu 博客-菜单表
type ldMenu struct {
	ldMenuDo

	ALL          field.Asterisk
	ID           field.Int64
	ParentMenuID field.Int64  // 上一级菜单id
	MenuIcon     field.String // 菜单图标
	MenuName     field.String // 菜单名称
	MenuSort     field.Int32  // 排序
	MenuTarget   field.String // 打开方式 新标签or当前标签
	MenuURL      field.String // 菜单路径

	fieldMap map[string]field.Expr
}

func (l ldMenu) Table(newTableName string) *ldMenu {
	l.ldMenuDo.UseTable(newTableName)
	return l.updateTableName(newTableName)
}

func (l ldMenu) As(alias string) *ldMenu {
	l.ldMenuDo.DO = *(l.ldMenuDo.As(alias).(*gen.DO))
	return l.updateTableName(alias)
}

func (l *ldMenu) updateTableName(table string) *ldMenu {
	l.ALL = field.NewAsterisk(table)
	l.ID = field.NewInt64(table, "id")
	l.ParentMenuID = field.NewInt64(table, "parent_menu_id")
	l.MenuIcon = field.NewString(table, "menu_icon")
	l.MenuName = field.NewString(table, "menu_name")
	l.MenuSort = field.NewInt32(table, "menu_sort")
	l.MenuTarget = field.NewString(table, "menu_target")
	l.MenuURL = field.NewString(table, "menu_url")

	l.fillFieldMap()

	return l
}

func (l *ldMenu) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := l.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (l *ldMenu) fillFieldMap() {
	l.fieldMap = make(map[string]field.Expr, 7)
	l.fieldMap["id"] = l.ID
	l.fieldMap["parent_menu_id"] = l.ParentMenuID
	l.fieldMap["menu_icon"] = l.MenuIcon
	l.fieldMap["menu_name"] = l.MenuName
	l.fieldMap["menu_sort"] = l.MenuSort
	l.fieldMap["menu_target"] = l.MenuTarget
	l.fieldMap["menu_url"] = l.MenuURL
}

func (l ldMenu) clone(db *gorm.DB) ldMenu {
	l.ldMenuDo.ReplaceConnPool(db.Statement.ConnPool)
	return l
}

func (l ldMenu) replaceDB(db *gorm.DB) ldMenu {
	l.ldMenuDo.ReplaceDB(db)
	return l
}

type ldMenuDo struct{ gen.DO }

func (l ldMenuDo) Debug() *ldMenuDo {
	return l.withDO(l.DO.Debug())
}

func (l ldMenuDo) WithContext(ctx context.Context) *ldMenuDo {
	return l.withDO(l.DO.WithContext(ctx))
}

func (l ldMenuDo) ReadDB() *ldMenuDo {
	return l.Clauses(dbresolver.Read)
}

func (l ldMenuDo) WriteDB() *ldMenuDo {
	return l.Clauses(dbresolver.Write)
}

func (l ldMenuDo) Session(config *gorm.Session) *ldMenuDo {
	return l.withDO(l.DO.Session(config))
}

func (l ldMenuDo) Clauses(conds ...clause.Expression) *ldMenuDo {
	return l.withDO(l.DO.Clauses(conds...))
}

func (l ldMenuDo) Returning(value interface{}, columns ...string) *ldMenuDo {
	return l.withDO(l.DO.Returning(value, columns...))
}

func (l ldMenuDo) Not(conds ...gen.Condition) *ldMenuDo {
	return l.withDO(l.DO.Not(conds...))
}

func (l ldMenuDo) Or(conds ...gen.Condition) *ldMenuDo {
	return l.withDO(l.DO.Or(conds...))
}

func (l ldMenuDo) Select(conds ...field.Expr) *ldMenuDo {
	return l.withDO(l.DO.Select(conds...))
}

func (l ldMenuDo) Where(conds ...gen.Condition) *ldMenuDo {
	return l.withDO(l.DO.Where(conds...))
}

func (l ldMenuDo) Order(conds ...field.Expr) *ldMenuDo {
	return l.withDO(l.DO.Order(conds...))
}

func (l ldMenuDo) Distinct(cols ...field.Expr) *ldMenuDo {
	return l.withDO(l.DO.Distinct(cols...))
}

func (l ldMenuDo) Omit(cols ...field.Expr) *ldMenuDo {
	return l.withDO(l.DO.Omit(cols...))
}

func (l ldMenuDo) Join(table schema.Tabler, on ...field.Expr) *ldMenuDo {
	return l.withDO(l.DO.Join(table, on...))
}

func (l ldMenuDo) LeftJoin(table schema.Tabler, on ...field.Expr) *ldMenuDo {
	return l.withDO(l.DO.LeftJoin(table, on...))
}

func (l ldMenuDo) RightJoin(table schema.Tabler, on ...field.Expr) *ldMenuDo {
	return l.withDO(l.DO.RightJoin(table, on...))
}

func (l ldMenuDo) Group(cols ...field.Expr) *ldMenuDo {
	return l.withDO(l.DO.Group(cols...))
}

func (l ldMenuDo) Having(conds ...gen.Condition) *ldMenuDo {
	return l.withDO(l.DO.Having(conds...))
}

func (l ldMenuDo) Limit(limit int) *ldMenuDo {
	return l.withDO(l.DO.Limit(limit))
}

func (l ldMenuDo) Offset(offset int) *ldMenuDo {
	return l.withDO(l.DO.Offset(offset))
}

func (l ldMenuDo) Scopes(funcs ...func(gen.Dao) gen.Dao) *ldMenuDo {
	return l.withDO(l.DO.Scopes(funcs...))
}

func (l ldMenuDo) Unscoped() *ldMenuDo {
	return l.withDO(l.DO.Unscoped())
}

func (l ldMenuDo) Create(values ...*models.LdMenu) error {
	if len(values) == 0 {
		return nil
	}
	return l.DO.Create(values)
}

func (l ldMenuDo) CreateInBatches(values []*models.LdMenu, batchSize int) error {
	return l.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (l ldMenuDo) Save(values ...*models.LdMenu) error {
	if len(values) == 0 {
		return nil
	}
	return l.DO.Save(values)
}

func (l ldMenuDo) First() (*models.LdMenu, error) {
	if result, err := l.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*models.LdMenu), nil
	}
}

func (l ldMenuDo) Take() (*models.LdMenu, error) {
	if result, err := l.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*models.LdMenu), nil
	}
}

func (l ldMenuDo) Last() (*models.LdMenu, error) {
	if result, err := l.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*models.LdMenu), nil
	}
}

func (l ldMenuDo) Find() ([]*models.LdMenu, error) {
	result, err := l.DO.Find()
	return result.([]*models.LdMenu), err
}

func (l ldMenuDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*models.LdMenu, err error) {
	buf := make([]*models.LdMenu, 0, batchSize)
	err = l.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (l ldMenuDo) FindInBatches(result *[]*models.LdMenu, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return l.DO.FindInBatches(result, batchSize, fc)
}

func (l ldMenuDo) Attrs(attrs ...field.AssignExpr) *ldMenuDo {
	return l.withDO(l.DO.Attrs(attrs...))
}

func (l ldMenuDo) Assign(attrs ...field.AssignExpr) *ldMenuDo {
	return l.withDO(l.DO.Assign(attrs...))
}

func (l ldMenuDo) Joins(fields ...field.RelationField) *ldMenuDo {
	for _, _f := range fields {
		l = *l.withDO(l.DO.Joins(_f))
	}
	return &l
}

func (l ldMenuDo) Preload(fields ...field.RelationField) *ldMenuDo {
	for _, _f := range fields {
		l = *l.withDO(l.DO.Preload(_f))
	}
	return &l
}

func (l ldMenuDo) FirstOrInit() (*models.LdMenu, error) {
	if result, err := l.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*models.LdMenu), nil
	}
}

func (l ldMenuDo) FirstOrCreate() (*models.LdMenu, error) {
	if result, err := l.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*models.LdMenu), nil
	}
}

func (l ldMenuDo) FindByPage(offset int, limit int) (result []*models.LdMenu, count int64, err error) {
	result, err = l.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = l.Offset(-1).Limit(-1).Count()
	return
}

func (l ldMenuDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = l.Count()
	if err != nil {
		return
	}

	err = l.Offset(offset).Limit(limit).Scan(result)
	return
}

func (l ldMenuDo) Scan(result interface{}) (err error) {
	return l.DO.Scan(result)
}

func (l ldMenuDo) Delete(models ...*models.LdMenu) (result gen.ResultInfo, err error) {
	return l.DO.Delete(models)
}

func (l *ldMenuDo) withDO(do gen.Dao) *ldMenuDo {
	l.DO = *do.(*gen.DO)
	return l
}
